import os
import json

# Where we retrive assets from
TOP = './img/Assets/'
TAB = '    '

# The object we will store the assets into
assetsData = {}

# We are going to walk all the files in TOP
# os.walk returns a list of tuples, each tuple relates to a single directory
# - the path to that firectory
# - all directories within that directory
# - all files within that directory
#
for (path, dirs, files) in os.walk(TOP):

    # Because all our asset files are in the lowermost directory, we only care
    # about tuples returned by os.walk that contains files
    if not files:
        continue

    # We want the parts of a path, for eg. my/path as a list of strings ie.
    # ['my', 'path'], so that we can use those strings to index into a dict
    pathParts = path.replace(TOP, '').split(os.sep)
    # We want to recursively index into our dict to place asset paths in the
    # current part of the nested dict. The local variable localData is used
    # to do this
    localData = assetsData
    
    for pathPart in pathParts:
        if pathPart not in localData.keys():
            localData[pathPart] = [] if pathPart == pathParts[-1] else {}
        localData = localData[pathPart]

    for file in files:
        filePath = os.path.join(path, file)
        localData.append(filePath)

with open('./src/assetStructure.json', 'w') as fs:
    json.dump(assetsData, fs, indent=TAB)