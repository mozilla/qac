/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is the Mozilla Community QA Extension
 *
 * The Initial Developer of the Original Code is the Mozilla Corporation.
 * Portions created by the Initial Developer are Copyright (C) 2007
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *  Zach Lipton <zach@zachlipton.com>
 *  Ben Hsieh <bhsieh@mozilla.com>
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
* ***** END LICENSE BLOCK ***** */

pref("qa.extension.litmus.url", "https://litmus.mozilla.org/");
pref("qa.extension.hermes.url", "https://litmus.mozilla.org/hermes/1/");
pref("qa.extension.bugzilla.url", "https:/bugzilla.mozilla.org/");
pref("qa.extension.isFirstTime", true);
pref("qa.extension.enableNotification", true);
pref("qa.extension.minNotificationInterval", 5400000); // 90 minutes
pref("qa.extension.lastNotificationTime", 0);
pref("qa.extension.minNotificationCheckInterval", 5400000); // 90 minutes
pref("qa.extension.lastNotificationCheckTime", 0);
pref("qa.extension.notificationSettings", '0,1,0,1,0,0,1');
pref("qa.extension.litmus.runId", -1);
pref("qa.extension.litmus.runIndex", 0);
pref("qa.extension.litmus.groupId", -1);
pref("qa.extension.litmus.groupIndex", 0);
pref("qa.extension.litmus.subgroupId", -1);
pref("qa.extension.litmus.subgroupIndex", 0);
pref("qa.extension.litmus.testcaseId", -1);
pref("qa.extension.litmus.testcaseIndex", 0);
pref("qa.extension.config.platform", "Windows");
pref("qa.extension.config.os", "Windows XP");
pref("qa.extension.config.branch", "3.5 Branch");
pref("qa.extension.config.product", "Firefox");
pref("qa.extension.config.buildId", "20090830042116");
pref("qa.extension.config.remember", false);
