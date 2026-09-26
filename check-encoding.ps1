# check-encoding.ps1
# Validate project files. NEVER modifies files.

$ErrorActionPreference = "Stop"

$roots = @(
    ".\lectures",
    ".\demos"
)

$extensions = @(
    ".html",
    ".css",
    ".js",
    ".json",
    ".md"
)

$utf8Strict = New-Object System.Text.UTF8Encoding($false, $true)

# Common mojibake leading characters:
# U+00C3, U+00C2, U+00C4
$markers = @(
    [char]0x00C3,
    [char]0x00C2,
    [char]0x00C4
)

$errors = 0

$files = Get-ChildItem $roots -Recurse -File -ErrorAction SilentlyContinue |
    Where-Object {
        $extensions -contains $_.Extension.ToLower()
    }

foreach ($file in $files) {

    try {
        $bytes = [System.IO.File]::ReadAllBytes($file.FullName)

        # Strict UTF-8 validation
        $text = $utf8Strict.GetString($bytes)

        $found = $false

        foreach ($marker in $markers) {
            if ($text.Contains($marker)) {
                $found = $true
                break
            }
        }

        if ($found) {
            Write-Host "[MOJIBAKE] $($file.FullName)"
            $errors++
        }
    }
    catch {
        Write-Host "[INVALID UTF-8] $($file.FullName)"
        $errors++
    }
}

Write-Host ""

if ($errors -gt 0) {
    Write-Host "Encoding check FAILED: $errors problem file(s)."
    exit 1
}

Write-Host "Encoding check PASSED."
exit 0