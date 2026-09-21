import os, re

# Map old sizes -> new sizes
# We go up one step for each tiny size
upgrades = [
    (r'text-\[8px\]',  'text-[11px]'),
    (r'text-\[9px\]',  'text-[12px]'),
    (r'text-\[10px\]', 'text-[13px]'),
    (r'text-\[11px\]', 'text-sm'),      # 14px
    (r'text-\[12px\]', 'text-sm'),      # 14px
    (r'text-\[13px\]', 'text-base'),    # 16px
]

root = r'c:\Users\rankh\OneDrive\Desktop\videh\src'
exts = {'.tsx', '.ts', '.css'}

changed_files = []
for dirpath, _, files in os.walk(root):
    for fname in files:
        if os.path.splitext(fname)[1] not in exts:
            continue
        fpath = os.path.join(dirpath, fname)
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()
        new_content = content
        for pattern, replacement in upgrades:
            new_content = re.sub(pattern, replacement, new_content)
        if new_content != content:
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            changed_files.append(fname)

print(f"Updated {len(changed_files)} files:")
for f in changed_files:
    print(f"  - {f}")
