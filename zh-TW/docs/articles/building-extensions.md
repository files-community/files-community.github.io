# 開發擴充功能

### 範例 - 文件預覽

Files 會透過您的 App Manifest 文件來獲取擴充功能的名稱。以 Markdown 文件預覽擴充功能為例，應呈現如下表所示：
```xml  
<Extensions>
  <uap3:Extension Category="windows.appExtension">
    <uap3:AppExtension Name="com.files.filepreview"
                        Id="markdown"
                        DisplayName="Markdown 文件預覽"
                        Description="新增對 Markdown 文件預覽的支援。"
                        PublicFolder="Public">
      <uap3:Properties>
        <Service>com.markdownpreview.controlservice</Service>
      </uap3:Properties>
    </uap3:AppExtension>
  </uap3:Extension>
  <uap:Extension Category="windows.appService" EntryPoint="FilePreviewService.Preview">
    <uap:AppService Name="com.markdownpreview.controlservice" />
  </uap:Extension>
</Extensions>
```
Files 還會查看 FileExtensions.json 文件以得知此擴充功能該適用於何種檔案類型。如果所選檔案的類型在此文件中出現，則會自動啟用此擴充功能。

## Preview controls
Previews are sent as a string containing xaml that is then loaded into the preview pane using the ```XamlReader```. You can define this string as the "preview" parameter in the response. This does have it's limitations, as only controls that are already avaliable to Files can be used. This means that extensions are limited to standard WinUI controls, and controls from the Windows Community Toolkit.

This is an example of a string that can be sent back to Files.
```xml
<controls:MarkdownTextBlock xml:space="preserve" xmlns=\"http://schemas.microsoft.com/winfx/2006/xaml/presentation" xmlns:controls="using:Microsoft.Toolkit.Uwp.UI.Controls">
  <controls:MarkdownTextBlock.Text>
    Hello, world!
  </controls:MarkdownTextBlock.Text>
</controls:MarkdownTextBlock>
```
## Preview Images
Since images can't be sent in the response, Files allows images to be loaded as Base64 string that represents the images buffer. See the sample service for an example of this.
This is an
This is an example of how you would encode your image as a base64 string, and add that to the xaml string.
```cs
var base64string = "";
var file = await StorageFile.GetFileFromApplicationUriAsync(new Uri("ms-appx:///Assets/FilesHome.png"));
var stream = await file.OpenReadAsync();

using (var memoryStream = new MemoryStream())
{
    memoryStream.Capacity = (int)stream.Size;
    var ibuffer = memoryStream.GetWindowsRuntimeBuffer();
    ibuffer = await stream.ReadAsync(ibuffer, (uint)stream.Size, InputStreamOptions.None).AsTask().ConfigureAwait(false);
    var byteArray = ibuffer.ToArray();
    base64string = Convert.ToBase64String(byteArray);
}
var xaml = $"<ScrollViewer xml:space=\"preserve\" xmlns=\"http://schemas.microsoft.com/winfx/2006/xaml/presentation\" xmlns:controls=\"using:Files.UserControls\"> 
  <controls:StringEncodedImage>
    <controls:StringEncodedImage.EncodedImage>
      {base64string}
    </controls:StringEncodedImage.EncodedImage>
  <controls:StringEncodedImage>
  </ScrollViewer>
```

## Details
File details are sent as a Json string with the parameter name "details", which is deserialized by Files, and then added to the details list in the preview pane.
The two Properties you will need for this are "LocalizedName" and "Value" of types ```string``` and ```object```, respectively.
This is an example of valid Json data that can be used by Files.
```json
[
  {
    "LocalizedName": "Hello",
    "Value": "World!",
  }
]
```

## Specifying file types
Preview extensions can specify the types of files they support by adding them to a json list in a file named ```FileExtensions.json``` in the extension's public folder.

Also check out the [preview extensions sample repository](https://github.com/files-community/preview-pane-sample-extension).
