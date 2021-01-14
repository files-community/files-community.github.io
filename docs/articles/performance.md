# Performance settings

To help improve performance you can use 2 settings. Both can be found in the `Experimental` settings page.


**Cache files and folders**

After navigating to a directory, Files can cache the files/folders list and use it the next time you navigate to the same directory (this should result in the list of items loading faster).


**Preemptive cache parallel limit**

To increase navigating performance even more you can set up preemptive caching. After navigation to any path the preemptive cache is going through all folders in this path and loads them into cache. This way the next navigation to any child folder will be faster.

Preloading folders is an expensive job for drive usage and also a little bit on CPU. That's why you can set parallel limit for this operations. If you set 0, the preemptive cache is turned off. For really fast drives, like NVMe, the limit can be set a lot higher (10 for example) then for hard drives.
