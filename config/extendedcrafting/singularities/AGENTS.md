#AGENTS.md for custom singularities

##Project environment
- The main folder that this AGENTS.md applies is located in `~\curseforge\minecraft\Instances\.21 Neoforge test\config\extendedcrafting\singularities`
- All files in the folder are to be written in only .json format

##Main goal
- Your main goal for this folder is to create a .json file for every item found in the game that contains the tag `#c:ingots` or `#c:gems`.
- Check all the .json files follows within the constraints stated below.

##Dev tips
- Use the tag system whenever several ingredients shares a similar itemID, see `electrum.json` for example of how to handle items of similar ID.
- Use the 
- Custom singularities should only be made with items that contains the tag `#c:ingots` or `#c:gems`
- The colours of the singularities should match the colours found on the textures of the item.
- You may look into the .jar files of each mods to identify the color of the item itself. All relevant mods are found in the folder `~\curseforge\minecraft\Instances\.21 Neoforge test\mods`.
- Within the .jar file of the mod, you can find the items by navigating through navigating `~\assets\(name of mod)\textures\item`.
- If the item is shared by multiple mods, you are allowed to use any of the colours that the mods picked for the item.

##Constraints:
- Do not use the Internet to identify the colors of the items used for Singularities.
- Colours used by each Singularity should be unique.
- Names for each Singularity should be the name of the item itself, and not in ItemID format. Use the `conductive_alloy.json` file as reference on how naming should be done.