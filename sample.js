// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.contextMenus.create({title:"Look up '%s' in Wiktionary", contexts:['selection'], onclick:function(info, tab){
  chrome.tabs.create({
    url: 'http://en.wiktionary.org/wiki/' + info.selectionText
  });
}});
