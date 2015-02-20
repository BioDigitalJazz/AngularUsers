# Instructions

The goal is to build a user search that displays user profiles and allows them to be filtered by name.

## Requirements

* It must load in `data/users.json` and use it to populate a list of user profiles. All profiles should be shown by default.
* It should have an input into which a user can type a name to filter the list. The profiles on display should change as the user types. The search should be case-insensitive.
* The user profile should display all info about the user (their avatar, email, etc.) in a user-friendly manner. It should be defined as a directive called `user` (a skeleton has been provided).

## Rules

* You *can* use a CSS framework if you'd like but you aren't required to. 
* You *cannot* use other, non-Angular JavaScript libraries. Angular has everything you need. However you can use other Angular modules. For instance, Angular Resource has already been included for you.
* Have fun!

## Hints

* https://code.angularjs.org/1.3.10/docs/api/ngResource/service/$resource
* https://code.angularjs.org/1.3.10/docs/api/ng/directive/ngRepeat
* https://code.angularjs.org/1.3.10/docs/api/ng/directive/ngKeyup
* https://code.angularjs.org/1.3.10/docs/api/ng/filter/date 

## Notes

* The included AngularJS library is version 1.3.10. When looking at the docs, you should make sure you switch to that version. You can select that in the top left.
 