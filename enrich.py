import json
import re

# Read current TS file
ts_path = r'src\data\perfumes.ts'
with open(ts_path, 'r', encoding='utf-8') as f:
    ts_content = f.read()

# Extract JSON
json_str = re.search(r'export const perfumes: Perfume\[\] = (\[.*\]);', ts_content, re.DOTALL).group(1)
perfumes = json.loads(json_str)

# Mapping Rules
FAMILY_MAP = {
    'Citrus': ['lemon', 'bergamot', 'grapefruit', 'mandarin', 'orange', 'yuzu', 'lime', 'citrus', 'neroli'],
    'Woody': ['cedar', 'sandalwood', 'vetiver', 'oud', 'patchouli', 'guaiac', 'wood', 'pine', 'cypress', 'oak', 'birch'],
    'Floral': ['rose', 'jasmine', 'iris', 'tuberose', 'ylang', 'lily', 'orchid', 'violet', 'geranium', 'peony', 'floral', 'freesia', 'magnolia', 'osmanthus'],
    'Amber/Oriental': ['amber', 'vanilla', 'tonka', 'incense', 'resin', 'myrrh', 'benzoin', 'opoponax', 'balsam', 'labdanum'],
    'Aromatic': ['lavender', 'sage', 'rosemary', 'mint', 'thyme', 'basil', 'artemisia', 'aromatic', 'eucalyptus'],
    'Spicy': ['pepper', 'cardamom', 'cinnamon', 'clove', 'nutmeg', 'ginger', 'saffron', 'coriander', 'anise'],
    'Fruity': ['apple', 'peach', 'plum', 'coconut', 'pineapple', 'fig', 'blackcurrant', 'berry', 'cherry', 'pear'],
    'Leather': ['leather', 'suede', 'castoreum'],
    'Aquatic': ['sea', 'water', 'marine', 'salt', 'aquatic', 'ocean', 'calone', 'seaweed'],
    'Gourmand': ['coffee', 'chocolate', 'cacao', 'caramel', 'praline', 'almond', 'honey', 'sugar']
}

for p in perfumes:
    notes = [n.lower() for n in p['topNotes'] + p['heartNotes'] + p['baseNotes']]
    
    families = set()
    accords = set()
    
    for note in notes:
        for family, keywords in FAMILY_MAP.items():
            for kw in keywords:
                if kw in note:
                    families.add(family)
                    
                    # Deduced accords based on family hits
                    if family == 'Citrus': accords.add('Fresh')
                    if family == 'Woody': accords.add('Woody')
                    if family == 'Amber/Oriental': 
                        accords.add('Warm')
                        if 'vanilla' in note or 'tonka' in note:
                            accords.add('Sweet')
                        if 'incense' in note or 'resin' in note:
                            accords.add('Balsamic')
                    if family == 'Floral': accords.add('Floral')
                    if family == 'Aromatic': accords.add('Herbal')
                    if family == 'Spicy': accords.add('Spicy')
                    if family == 'Fruity': accords.add('Fruity')
                    if family == 'Leather': accords.add('Leather')
                    if family == 'Aquatic': accords.add('Marine')
                    if family == 'Gourmand': accords.add('Sweet')
                    
        # Additional distinct accords
        if 'musk' in note: accords.add('Musky')
        if 'smoke' in note or 'birch' in note: accords.add('Smoky')
        if 'powder' in note or 'iris' in note or 'violet' in note: accords.add('Powdery')
        if 'green' in note or 'galbanum' in note or 'grass' in note: accords.add('Green')
        if 'earth' in note or 'soil' in note or 'vetiver' in note or 'patchouli' in note: accords.add('Earthy')
        
    # Default fallback
    if not families:
        families.add('Aromatic')
    if not accords:
        accords.add('Fresh')
        
    # Sort for consistency
    p['families'] = sorted(list(families))[:3] # Max 3 families
    p['accords'] = sorted(list(accords))[:4]   # Max 4 accords

# Update TS definition
new_interface = """export interface Perfume {
  id: string;
  slug: string;
  brand: string;
  name: string;
  gender: string;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  seasons: string[];
  time: string;
  sprays: string;
  occasions: string[];
  featured?: boolean;
  families: string[];
  accords: string[];
}"""

new_ts = new_interface + '\n\nexport const perfumes: Perfume[] = ' + json.dumps(perfumes, indent=2) + ';\n'

with open(ts_path, 'w', encoding='utf-8') as f:
    f.write(new_ts)

print("Successfully enriched 1177 perfumes with families and accords.")
