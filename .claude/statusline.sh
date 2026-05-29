#!/usr/bin/env bash
# Claude Code status line: model · project · git branch
input=$(cat)
IFS=$'\t' read -r model dir < <(/usr/bin/python3 - "$input" <<'PY'
import sys, json, os
d = json.loads(sys.argv[1] or "{}")
model = d.get("model", {}).get("display_name", "?")
cwd = d.get("workspace", {}).get("current_dir", "")
print(model + "\t" + (os.path.basename(cwd) or "?"))
PY
)
branch=$(git rev-parse --abbrev-ref HEAD 2>/dev/null)
printf "%s · %s · ⎇ %s" "$model" "$dir" "${branch:-no-git}"
