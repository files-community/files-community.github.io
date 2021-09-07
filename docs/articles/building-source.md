# Building Files from source

1. Install Microsoft Visual Studio and the UWP Development kit.
2. Clone the [repository](https://github.com/files-community/files) and open `Files.sln` in VS.
3. Make sure that `Files.Package` is set as the startup item by right-clicking on `Files.Package` in the solution explorer and hitting 'Set as Startup item'.
4. Run `Files.Package, x64`* as `Debug` and it should look like this:
![VS Run config image](../../img/vs_run_cfg.png)
5. You're good to go!


**If x64 doesn't work, use the architecture of your system*
