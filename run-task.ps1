# run-lectures.ps1
# Generate CSE122 Lectures sequentially from task-003 to task-010.

$start = 3
$end   = 10

Write-Host ""
Write-Host "========================================"
Write-Host " CSE122 Lecture Generator"
Write-Host " Tasks: $start -> $end"
Write-Host "========================================"
Write-Host ""

for ($i = $start; $i -le $end; $i++) {

    $lectureNum = "{0:D2}" -f $i
    $taskNum    = "{0:D3}" -f $i

    $task    = "agents/tasks/task-$taskNum.md"
    $lecture = "lectures/lecture-$lectureNum/index.html"

    # Skip lectures already generated
    if (Test-Path $lecture) {
        Write-Host "[SKIP] Lecture $lectureNum already exists."
        continue
    }

    # Ensure task exists
    if (-not (Test-Path $task)) {
        Write-Host ""
        Write-Host "[ERROR] Task not found: $task"
        exit 1
    }

    Write-Host ""
    Write-Host "========================================"
    Write-Host " Generating Lecture $lectureNum"
    Write-Host " Task: $task"
    Write-Host "========================================"
    Write-Host ""

    # Run Codex non-interactively:
    # - workspace-write: can modify current project
    # - never: do not ask for approval
    codex exec `
        --yolo `
        "Execute $task"

    if ($LASTEXITCODE -ne 0) {
        Write-Host ""
        Write-Host "[FAILED] Lecture $lectureNum"
        Write-Host "Fix the issue and run this script again."
        exit $LASTEXITCODE
    }

    Write-Host ""
    Write-Host "[DONE] Lecture $lectureNum generated."
    Write-Host ""

    # Human review checkpoint
    if ($i -lt $end) {
        Read-Host "Review Lecture $lectureNum, then press ENTER to continue"
    }
}

Write-Host ""
Write-Host "========================================"
Write-Host " Lectures 03 -> 10 completed"
Write-Host "========================================"