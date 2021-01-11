# Configuring Files to launch with the Win + E shortcut
You can configure Files to launch using the Win + E shortcut by using this [AutoHotKey](https://www.autohotkey.com/) script:
```
FilesTitle := "Files ahk_class ApplicationFrameWindow ahk_exe ApplicationFrameHost.exe"
FilesLocation := USERPROFILE . "\AppData\Local\Microsoft\WindowsApps\files.exe"

; Win + E
#e::
    if WinExist(FilesTitle) {
        WinActivate % FilesTitle     ; Set focus
        SendInput ^t                    ; Send CTRL + t shortcut to open a new tab
    } else {
        Run % FilesLocation          ; Start Files
        WinWait % FilesTitle         ; Wait for it ...
        WinActivate % FilesTitle     ; Set focus
    }
return
```