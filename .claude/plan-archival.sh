#!/bin/bash
# Auto-archive completed plans to keep .claude/plans/ clean

PLANS_DIR=".claude/plans"
ARCHIVE_DIR=".claude/plans/archive"

# Create archive directory if it doesn't exist
mkdir -p "$ARCHIVE_DIR"

# Find all completed plans and move them
find "$PLANS_DIR" -maxdepth 1 -name "*.md" -type f | while read -r plan; do
  if grep -q "^status: completed$" "$plan" 2>/dev/null; then
    filename=$(basename "$plan")
    mv "$plan" "$ARCHIVE_DIR/$filename"
    echo "📦 Archived: $filename"
  fi
done
