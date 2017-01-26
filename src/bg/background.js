/* global chrome,Store,Firebase */
'use strict';
var syncTabId,
	settings = new Store('settings', {
		'secret': undefined
	});

var contextMenu = chrome.contextMenus.create({
	title: 'BrowSync Start',
	onclick: function (info, tab) {
		toggle(tab);
	}
});

//Firebase.enableLogging(true);
var f = new Firebase('https://browsync.firebaseio.com/views/');

function setActiveIcon(tabId) {
	chrome.browserAction.setIcon({
		tabId: tabId,
		path: 'icons/logo32-active.png'
	});
}

function setDefaultIcon(tabId) {
	chrome.browserAction.setIcon({
		tabId: tabId,
		path: 'icons/logo32.png'
	});
}

function applyReplace(url) {
	if (settings.get('replaceWhat1')) {
		url = url.replace(settings.get('replaceWhat1'), settings.get('replaceWith1'));
	}
	if (settings.get('replaceWhat2')) {
		url = url.replace(settings.get('replaceWhat2'), settings.get('replaceWith2'));
	}
	if (settings.get('replaceWhat3')) {
		url = url.replace(settings.get('replaceWhat3'), settings.get('replaceWith3'));
	}
	return url;
}

function getUrl(tab) {
	tab.url = applyReplace(tab.url);
	console.log(tab.tabId + ' ' + tab.url);
	f.child(settings.get('secret')).child('url').set(tab.url, function (error) {
		if (error) {
			console.log('Data could not be saved.' + error);
		} else {
			console.log('Data saved successfully.');
		}
	});

	f.child(settings.get('secret')).child('totalViews').transaction(function (current_value) {
		return current_value + 1;
	});
}

function checkForValidUrl(tabId, changeInfo, tab) {
	if (syncTabId === tabId && changeInfo.status === 'loading') {
		getUrl(tab);
	}
}

function toggle(tab) {
	if (!settings.get('secret')) {
		chrome.tabs.create({
			url: '/src/options_custom/index.html'
		});
	}

	if (syncTabId === tab.id) {
		syncTabId = undefined;

		setDefaultIcon(tab.id);

		chrome.contextMenus.update(contextMenu, {
			'title': 'BrowSync Stop'
		});

		chrome.tabs.onUpdated.removeListener(checkForValidUrl);
		console.log('disabled for tab' + tab.id);
	} else {
		setActiveIcon(tab.id);

		if (syncTabId) {
			chrome.tabs.onUpdated.removeListener(checkForValidUrl);
		}

		chrome.contextMenus.update(contextMenu, {
			'title': 'BrowSync Start'
		});

		chrome.tabs.get(tab.id, getUrl);
		chrome.tabs.onUpdated.addListener(checkForValidUrl);
		syncTabId = tab.id;
		console.log('enabled for tab' + tab.id);
	}
}

chrome.browserAction.onClicked.addListener(function (tab) {
	toggle(tab);
});

chrome.tabs.onUpdated.addListener(function (tabId) {
	if (syncTabId !== tabId) {
		setDefaultIcon(tabId);
	} else {
		setActiveIcon(tabId);
	}
});

chrome.tabs.onActivated.addListener(function (activeInfo) {
	console.log('onActivated', activeInfo.tabId);
	if (syncTabId === activeInfo.tabId) {
		chrome.contextMenus.update(contextMenu, {
			'title': 'BrowSync Stop'
		});
		setActiveIcon(activeInfo.tabId);
	} else {
		chrome.contextMenus.update(contextMenu, {
			'title': 'BrowSync Start'
		});
		setDefaultIcon(activeInfo.tabId);
	}
});