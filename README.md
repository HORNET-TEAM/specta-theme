Specta Theme
============

In order to init project for all of us, this is a minimal folder in order to create a theme from scratch.

All will be easy to integrate to Symfony view, by creating ControllerAction/Route with associated view contains content of this project.

1. First step clone this project: `git clone https://github.com/HORNET-TEAM/specta-theme.git`

2. Create your file at the root of the project like `shop.html`

3. Customize CSS in file `css/main.css` for the whole things like menu, footer, or body.

4. Create one file CSS by view like `css/[viewName.css]` and include it on the view associated with `<link rel="stylesheet" href="css/shop.css">` in `<head>` section.

Git workflow (`yourName` is the name of the branch, for me `florian`, simply):

1. Create your branch like this `git branch yourName`
2. Go on it with `git checkout yourName`
3. Add your modification with `git add --all`
4. Commit your change with `git push origin yourName`
5.

Your branch exist so you just have to do the 2, 3, 4 and 5 step.

Example:

```
	git branch florian
	git checkout florian
	git add --all
	git commit -m "Ajout d'information au README"
	git push origin florian
```