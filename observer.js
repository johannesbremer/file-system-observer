function logMessage(message) {
  const logContainer = document.getElementById('observer');
  const logEntry = document.createElement('div');
  logEntry.className = 'log-entry';
  logEntry.textContent = message;

  logContainer.appendChild(logEntry);

  // Ensure we only keep the last 10 log entries
  while (logContainer.children.length > 10) {
    logContainer.removeChild(logContainer.firstChild);
  }

  // Scroll to the bottom of the log
  logContainer.scrollTop = logContainer.scrollHeight;
}

const callback = async (records, observer) => {  
  for (const record of records) {
    console.log(record.changedHandle.kind)
    logMessage`The ${record.changedHandle.kind} "${record.changedHandle.name}" was ${record.type}`;
  }
};

const observer = new FileSystemObserver(callback);
await observer.observe(await navigator.storage.getDirectory());
