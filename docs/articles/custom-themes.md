# Custom Themes

Files allows for theming through xaml resource dictionaries, which allows users to override the default brushes used throughout the app.

Themes are loaded from the ```Themes``` folder in the app's ```LocalState``` folder. A drop-down (Color scheme) is located in Appearance settings to select the current theme.

### Quick start

1. Open your text editor of choice, and paste in the template located below. Then, save the file as ```%userprofile%\AppData\Local\Packages\49306atecsolution.FilesUWP_et10x9a9vyk8t\LocalState\Themes\test1.xaml```.

2. Change a few of the color values around

3. Open files and go to settings, under appearance, there will be a drop-down menu labeled "color scheme". Use that to select your theme.

4. Restart Files

Your theme will now be loaded in. If you add more themes, you can switch between them using the dropdown.

<details>
<summary>
Template
</summary>

```
<ResourceDictionary xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
                    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
                    xmlns:Windows10version1809="http://schemas.microsoft.com/winfx/2006/xaml/presentation?IsApiContractPresent(Windows.Foundation.UniversalApiContract, 7)"
                    xmlns:BelowWindows10version1809="http://schemas.microsoft.com/winfx/2006/xaml/presentation?IsApiContractNotPresent(Windows.Foundation.UniversalApiContract, 7)">
    <ResourceDictionary.ThemeDictionaries>
        <ResourceDictionary>
                    <ResourceDictionary.ThemeDictionaries>
                        <ResourceDictionary x:Key="Light">
                            <SolidColorBrush x:Key="CloudDriveSyncStatusOnlineColor" Color="#0078D7" />
                            <SolidColorBrush x:Key="CloudDriveSyncStatusOfflineColor" Color="#30BB03" />
                            <SolidColorBrush x:Key="CloudDriveSyncStatusExcludedColor" Color="#AAAAAA" />
                            <SolidColorBrush x:Key="ApplicationPageBackgroundThemeBrush" Color="White" />
                            <SolidColorBrush x:Key="SystemControlPageBackgroundMediumAltMediumBrush" Color="#99000000" />
                            <Color x:Key="SolidBackgroundFillColorBase">#F3F3F3</Color>
                            <Color x:Key="SolidBackgroundFillColorSecondary">#EEEEEE</Color>
                            <Color x:Key="SolidBackgroundFillColorTertiary">#F9F9F9</Color>
                            <Color x:Key="SolidBackgroundFillColorQuarternary">#FFFFFF</Color>
                            <SolidColorBrush x:Key="SolidBackgroundFillColorBaseBrush" Color="{StaticResource SolidBackgroundFillColorBase}" />
                            <SolidColorBrush x:Key="SolidBackgroundFillColorSecondaryBrush" Color="{StaticResource SolidBackgroundFillColorSecondary}" />
                            <SolidColorBrush x:Key="SolidBackgroundFillColorTertiaryBrush" Color="{StaticResource SolidBackgroundFillColorTertiary}" />
                            <SolidColorBrush x:Key="SolidBackgroundFillColorQuarternaryBrush" Color="{StaticResource SolidBackgroundFillColorQuarternary}" />
                            <Color x:Key="ControlStrokeColorDefault">#0F000000</Color>
                            <Color x:Key="ControlStrokeColorSecondary">#29000000</Color>
                            <SolidColorBrush x:Key="ControlFillColorDefaultBrush" Color="#B3FFFFFF" />
                            <SolidColorBrush x:Key="ControlFillColorSecondaryBrush" Color="#80F9F9F9" />
                            <SolidColorBrush x:Key="ControlFillColorTertiaryBrush" Color="#4DF9F9F9" />
                            <SolidColorBrush x:Key="ControlFillColorDisabledBrush" Color="#4DF9F9F9" />
                            <SolidColorBrush x:Key="ControlFillColorTransparentBrush" Color="#00FFFFFF" />
                            <SolidColorBrush x:Key="ControlFillColorInputActiveBrush" Color="#FFFFFF" />
                            <SolidColorBrush x:Key="ControlStrokeColorDefaultBrush" Color="{StaticResource ControlStrokeColorDefault}" />
                            <SolidColorBrush x:Key="ControlStrokeColorSecondaryBrush" Color="{StaticResource ControlStrokeColorSecondary}" />
                            <SolidColorBrush x:Key="ControlStrokeColorOnAccentDefaultBrush" Color="#0F000000" />
                            <SolidColorBrush x:Key="ControlStrokeColorOnAccentSecondaryBrush" Color="#29000000" />
                            <SolidColorBrush x:Key="ControlStrokeColorOnAccentTertiaryBrush" Color="#37000000" />
                            <SolidColorBrush x:Key="ControlStrokeColorOnAccentDisabledBrush" Color="#0F000000" />
                        </ResourceDictionary>
                        <ResourceDictionary x:Key="Dark">
                            <SolidColorBrush x:Key="CloudDriveSyncStatusOnlineColor" Color="#0078D7" />
                            <SolidColorBrush x:Key="CloudDriveSyncStatusOfflineColor" Color="#30BB03" />
                            <SolidColorBrush x:Key="CloudDriveSyncStatusExcludedColor" Color="#AAAAAA" />
                            <SolidColorBrush x:Key="ApplicationPageBackgroundThemeBrush" Color="#201F1E" />
                            <SolidColorBrush x:Key="SystemControlPageBackgroundMediumAltMediumBrush" Color="#99000000" />
                            <Color x:Key="SolidBackgroundFillColorBase">#202020</Color>
                            <Color x:Key="SolidBackgroundFillColorSecondary">#1C1C1C</Color>
                            <Color x:Key="SolidBackgroundFillColorTertiary">#282828</Color>
                            <Color x:Key="SolidBackgroundFillColorQuarternary">#2C2C2C</Color>
                            <SolidColorBrush x:Key="SolidBackgroundFillColorBaseBrush" Color="{StaticResource SolidBackgroundFillColorBase}" />
                            <SolidColorBrush x:Key="SolidBackgroundFillColorSecondaryBrush" Color="{StaticResource SolidBackgroundFillColorSecondary}" />
                            <SolidColorBrush x:Key="SolidBackgroundFillColorTertiaryBrush" Color="{StaticResource SolidBackgroundFillColorTertiary}" />
                            <SolidColorBrush x:Key="SolidBackgroundFillColorQuarternaryBrush" Color="{StaticResource SolidBackgroundFillColorQuarternary}" />
                            <Color x:Key="ControlStrokeColorDefault">#33000000</Color>
                            <Color x:Key="ControlStrokeColorSecondary">#73000000</Color>
                            <SolidColorBrush x:Key="ControlFillColorDefaultBrush" Color="#0FFFFFFF" />
                            <SolidColorBrush x:Key="ControlFillColorSecondaryBrush" Color="#15FFFFFF" />
                            <SolidColorBrush x:Key="ControlFillColorTertiaryBrush" Color="#0BFFFFFF" />
                            <SolidColorBrush x:Key="ControlFillColorDisabledBrush" Color="#0BFFFFFF" />
                            <SolidColorBrush x:Key="ControlFillColorTransparentBrush" Color="#00FFFFFF" />
                            <SolidColorBrush x:Key="ControlFillColorInputActiveBrush" Color="#15FFFFFF" />
                            <SolidColorBrush x:Key="ControlStrokeColorDefaultBrush" Color="{StaticResource ControlStrokeColorDefault}" />
                            <SolidColorBrush x:Key="ControlStrokeColorSecondaryBrush" Color="{StaticResource ControlStrokeColorSecondary}" />
                            <SolidColorBrush x:Key="ControlStrokeColorOnAccentDefaultBrush" Color="#33000000" />
                            <SolidColorBrush x:Key="ControlStrokeColorOnAccentSecondaryBrush" Color="#73000000" />
                            <SolidColorBrush x:Key="ControlStrokeColorOnAccentTertiaryBrush" Color="#37000000" />
                            <SolidColorBrush x:Key="ControlStrokeColorOnAccentDisabledBrush" Color="#33000000" />
                        </ResourceDictionary>
    </ResourceDictionary.ThemeDictionaries>
</ResourceDictionary>
```
</details> 

You can also use the [Fluent XAML Theme Editor](https://github.com/microsoft/fluent-xaml-theme-editor) to easily design and load your theme. 


You can view other themes and even upload your own [here](https://github.com/files-community/custom-themes).