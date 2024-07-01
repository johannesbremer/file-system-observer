const callback = async (records, observer) => {
  // Will be run when the observed file changes.

  // The change record includes a handle detailing which file has
  // changed, which in this case corresponds to the observed handle.
  const changedFileHandle = records[0].changedHandle;
  assert(await fileHandle.isSameEntry(changedFileHandle));

  // Since we're observing changes to a file, the `root` of the change
  // record also corresponds to the observed file.
  assert(await fileHandle.isSameEntry(records[0].root));

  readChangesAndUpdateUI(changedFileHandle);
}

const observer = new FileSystemObserver(callback);
await observer.observe(fileHandle);