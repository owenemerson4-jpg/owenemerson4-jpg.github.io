import os, json
files = [f for f in os.listdir('headshotimages') if f.lower().endswith(('.jpg','.jpeg','.png','.gif','.webp'))]
with open('photolist.json','w') as out: json.dump(files, out, indent=2)
print("Wrote photolist.json with", len(files), "entries")
