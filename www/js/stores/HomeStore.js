/*
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * TodoStore
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');
var DirectoryStore = require('./DirectoryStore');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var SEARCH_EVENT = 'search';

var _searchKey = '';

var _employees = [];

var search = function(key, callback){
  _searchKey = key;

  DirectoryStore.findByName(_searchKey).done(function(employees) {
    _employees = employees;
    callback();
  }.bind(this));
};

var HomeStore = assign({}, EventEmitter.prototype, {

  getState : function(){
    return {
      searchKey : _searchKey,
      employees : _employees
    };
  },

  emitChange : function(){
    this.emit(SEARCH_EVENT);
  },

  addSearchListener : function(callback){
    this.on(SEARCH_EVENT, callback);
  },

  removeSearchListener : function(callback){
    this.removeListener(SEARCH_EVENT, callback);
  },

  dispatcherIndex: AppDispatcher.register(function(action){
    switch(action.actionType){
      case Constants.DIRECTORY_SEARCH:
        search(action.key.trim(), function(){
          HomeStore.emitChange();
        });
        break;
    };

    return true;
  }),

});

module.exports = HomeStore;
