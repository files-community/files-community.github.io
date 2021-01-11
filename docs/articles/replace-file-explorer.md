# Replacing File Explorer with Files (Unsupported)

*This guide involves modifying the registry, make sure to create a backup beforehand and proceed at your own risk. Please keep in mind that this method is unsupported and may not work for everyone.*

1. Create a backup of the registry, make sure to store the backup in your desktop folder so that you can access it in the event that Files won't open.
2. Open the registry editor
3. Navigate to `HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Folder\shell\open\command`
4. Set the default keys value to `%LOCALAPPDATA%\Microsoft\WindowsApps\files.exe -Directory %1` 
5. Delete the DelegateExecute key

**Known side effects**
- Trying to open Control Panel will launch Files instead.
