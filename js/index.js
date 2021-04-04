const toastDismissedKey = "ToastDismissedByUser";

if (getStringLocalStorage(toastDismissedKey) !== "True" &&
	document.getElementById("translation-toast").classList.contains("toast-hidden")) {
	document.getElementById("translation-toast").classList.remove("toast-hidden");
}

function getStringLocalStorage(key) {
	let storage = window.localStorage;
	return storage.getItem(key);
}

function putStringLocalStorage(key, data) {
	let storage = window.localStorage;
	return storage.setItem(key, data);
}

function toastCloseButtonClick() {
	if (!document.getElementById("translation-toast").classList.contains("toast-hidden")) {
		document.getElementById("translation-toast").classList.add("toast-hidden");
	}
	putStringLocalStorage(toastDismissedKey,"True");
}