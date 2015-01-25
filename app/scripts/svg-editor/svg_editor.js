'use strict';

var app = angular.module('svgEditor', []);

var palette = ['#000000','#202020','#404040','#606060','#808080','#a0a0a0','#c0c0c0','#e0e0e0','#ffffff','#800000','#ff0000','#808000','#ffff00','#008000','#00ff00','#008080','#00ffff','#000080','#0000ff','#800080','#ff00ff','#2b0000','#550000','#800000','#aa0000','#d40000','#ff0000','#ff2a2a','#ff5555','#ff8080','#ffaaaa','#ffd5d5','#280b0b','#501616','#782121','#a02c2c','#c83737','#d35f5f','#de8787','#e9afaf','#f4d7d7','#241c1c','#483737','#6c5353','#916f6f','#ac9393','#c8b7b7','#e3dbdb','#2b1100','#552200','#803300','#aa4400','#d45500','#ff6600','#ff7f2a','#ff9955','#ffb380','#ffccaa','#ffe6d5','#28170b','#502d16','#784421','#a05a2c','#c87137','#d38d5f','#deaa87','#e9c6af','#f4e3d7','#241f1c','#483e37','#6c5d53','#917c6f','#ac9d93','#c8beb7','#e3dedb','#2b2200','#554400','#806600','#aa8800','#d4aa00','#ffcc00','#ffd42a','#ffdd55','#ffe680','#ffeeaa','#fff6d5','#28220b','#504416','#786721','#a0892c','#c8ab37','#d3bc5f','#decd87','#e9ddaf','#f4eed7','#24221c','#484537','#6c6753','#918a6f','#aca793','#c8c4b7','#e3e2db','#222b00','#445500','#668000','#88aa00','#aad400','#ccff00','#d4ff2a','#ddff55','#e5ff80','#eeffaa','#f6ffd5','#22280b','#445016','#677821','#89a02c','#abc837','#bcd35f','#cdde87','#dde9af','#eef4d7','#22241c','#454837','#676c53','#8a916f','#a7ac93','#c4c8b7','#e2e3db','#112b00','#225500','#338000','#44aa00','#55d400','#66ff00','#7fff2a','#99ff55','#b3ff80','#ccffaa','#e5ffd5','#17280b','#2d5016','#447821','#5aa02c','#71c837','#8dd35f','#aade87','#c6e9af','#e3f4d7','#1f241c','#3e4837','#5d6c53','#7c916f','#9dac93','#bec8b7','#dee3db','#002b00','#005500','#008000','#00aa00','#00d400','#00ff00','#2aff2a','#55ff55','#80ff80','#aaffaa','#d5ffd5','#0b280b','#165016','#217821','#2ca02c','#37c837','#5fd35f','#87de87','#afe9af','#d7f4d7','#1c241c','#374837','#536c53','#6f916f','#93ac93','#b7c8b7','#dbe3db','#002b11','#005522','#008033','#00aa44','#00d455','#00ff66','#2aff80','#55ff99','#80ffb3','#aaffcc','#d5ffe6','#0b2817','#16502d','#217844','#2ca05a','#37c871','#5fd38d','#87deaa','#afe9c6','#d7f4e3','#1c241f','#37483e','#536c5d','#6f917c','#93ac9d','#b7c8be','#dbe3de','#002b22','#005544','#008066','#00aa88','#00d4aa','#00ffcc','#2affd5','#55ffdd','#80ffe6','#aaffee','#d5fff6','#0b2822','#165044','#217867','#2ca089','#37c8ab','#5fd3bc','#87decd','#afe9dd','#d7f4ee','#1c2422','#374845','#536c67','#6f918a','#93aca7','#b7c8c4','#dbe3e2','#00222b','#004455','#006680','#0088aa','#00aad4','#00ccff','#2ad4ff','#55ddff','#80e5ff','#aaeeff','#d5f6ff','#0b2228','#164450','#216778','#2c89a0','#37abc8','#5fbcd3','#87cdde','#afdde9','#d7eef4','#1c2224','#374548','#53676c','#6f8a91','#93a7ac','#b7c4c8','#dbe2e3','#00112b','#002255','#003380','#0044aa','#0055d4','#0066ff','#2a7fff','#5599ff','#80b3ff','#aaccff','#d5e5ff','#0b1728','#162d50','#214478','#2c5aa0','#3771c8','#5f8dd3','#87aade','#afc6e9','#d7e3f4','#1c1f24','#373e48','#535d6c','#6f7c91','#939dac','#b7bec8','#dbdee3','#00002b','#000055','#000080','#0000aa','#0000d4','#0000ff','#2a2aff','#5555ff','#8080ff','#aaaaff','#d5d5ff','#0b0b28','#161650','#212178','#2c2ca0','#3737c8','#5f5fd3','#8787de','#afafe9','#d7d7f4','#1c1c24','#373748','#53536c','#6f6f91','#9393ac','#b7b7c8','#dbdbe3','#11002b','#220055','#330080','#4400aa','#5500d4','#6600ff','#7f2aff','#9955ff','#b380ff','#ccaaff','#e5d5ff','#170b28','#2d1650','#442178','#5a2ca0','#7137c8','#8d5fd3','#aa87de','#c6afe9','#e3d7f4','#1f1c24','#3e3748','#5d536c','#7c6f91','#9d93ac','#beb7c8','#dedbe3','#22002b','#440055','#660080','#8800aa','#aa00d4','#cc00ff','#d42aff','#dd55ff','#e580ff','#eeaaff','#f6d5ff','#220b28','#441650','#672178','#892ca0','#ab37c8','#bc5fd3','#cd87de','#ddafe9','#eed7f4','#221c24','#453748','#67536c','#8a6f91','#a793ac','#c4b7c8','#e2dbe3','#2b0022','#550044','#800066','#aa0088','#d400aa','#ff00cc','#ff2ad4','#ff55dd','#ff80e5','#ffaaee','#ffd5f6','#280b22','#501644','#782167','#a02c89','#c837ab','#d35fbc','#de87cd','#e9afdd','#f4d7ee','#241c22','#483745','#6c5367','#916f8a','#ac93a7','#c8b7c4','#e3dbe2','#2b0011','#550022','#800033','#aa0044','#d40055','#ff0066','#ff2a7f','#ff5599','#ff80b2','#ffaacc','#ffd5e5','#280b17','#50162d','#782144','#a02c5a','#c83771','#d35f8d','#de87aa','#e9afc6','#f4d7e3','#241c1f','#48373e','#6c535d','#916f7c','#ac939d','#c8b7be','#e3dbde'];

app.directive('svgEditor', function() {
	return {
		scope: true,
		restrict: 'A',
		requre: ['ChatCtrl'],
		templateUrl: 'views/svg_editor.html',
		controller: function($scope, fbutil) {
			var data;
			loadData();

			function loadData() {
				data = fbutil.syncObject('data_array/data');
				data.$bindTo($scope, 'data');
			}

			$scope.getData = function() {
				return data;
			};

			$scope.save = function(value) {
				data.svg = value;
				data.$save();
			};
		},
		link: function ($scope) {

			var listener = function(type, data) {
				console.log('listen ', type, data);
				$scope.save(data);
/*				var _data = {
					'type': 'svg',
					'xmlns':'http://www.w3.org/2000/svg',
					'id': 'svgroot',
					'height': '480',
					'width' : '640',
					'nodes': {
 						'0': {
 							'type': 'path',
 						 	'stroke': 'black',
 						 	'fill': 'none',
 						 	'id': 'svg_1',
 						 	'd': 'M16,40 l0,0 l0,3 l-2,6 l-3,10 l-3,8 l-2,10 l-2,8 l-1,9 l0,8 l0,9 l0,6 l2,6 l3,5 l2,3 l6,4 l6,3 l8,4 l8,4 l10,3 l10,1 l11,2 l11,2 l9,1 l11,0 l11,-2 l10,-4 l10,-5 l8,-5 l6,-6 l5,-6 l6,-10 l2,-7 l2,-7 l1,-6 l0,-5 l0,-3 l0,-3 l0,-3 l-1,-2 l0,-1 l-1,0',
	 					},
						'length': '1'
					}
				};
				$scope.save(_data);*/
			};

			var svgCanvas = new SvgCanvas(document.getElementById('svgcanvas'), listener);

			$scope.$watch('data', function (value) {
				if (value !== null) {
					console.log('Value ', value);
					svgCanvas.update(value);
				}
			});

			var setSelectMode = function() {
				angular.element('.tool_button_current').removeClass('tool_button_current').addClass('tool_button');
				angular.element('#tool_select').addClass('tool_button_current');
				angular.element('#styleoverrides').text('*{cursor:move;pointer-events:all} svg{cursor:default}');
				svgCanvas.setMode('select');
			};

			var textBeingEntered = false;
			var selectedElement = null;
			var selectedChanged = function(window,elem) {
				selectedElement = elem;
				if (elem !== null) {

					// always set the mode of the editor to select because
					// upon creation of a text element the editor is switched into
					// select mode and this event fires - we need our UI to be in sync
					setSelectMode();

					// update fill color
					var fillColor = elem.getAttribute('fill');
					svgCanvas.setFillColor(fillColor);
					if (fillColor === 'none') {
						fillColor = 'url(\'images/none.png\')';
					}
					angular.element('#fill_color').css('background', fillColor);

					// update stroke color
					var strokeColor = elem.getAttribute('stroke');
					svgCanvas.setStrokeColor(strokeColor);
					if (strokeColor === null || strokeColor === '' || strokeColor === 'none') {
						strokeColor = 'url(\'images/none.png\')';
					}
					angular.element('#stroke_color').css('background', strokeColor);
					
					// update fill opacity
					var fillOpacity = elem.getAttribute('fill-opacity');
					if (fillOpacity === null || fillColor === '') {
						fillOpacity = 1.0;
					}
					fillOpacity = (fillOpacity*100)+' %';
					angular.element('#fill_opacity').val(fillOpacity);

					// update stroke opacity
					var strokeOpacity = elem.getAttribute('stroke-opacity');
					if (strokeOpacity === null || strokeOpacity === '') {
						strokeOpacity = 1.0;
					}
					strokeOpacity = (strokeOpacity*100)+' %';
					angular.element('#stroke_opacity').val(strokeOpacity);

					// update group opacity
					var opacity = elem.getAttribute('opacity');
					if (opacity === null || opacity === '') {
						opacity = 1.0;
					}
					opacity = (opacity*100)+' %';
					angular.element('#group_opacity').val(opacity);

					// update stroke-width
					var strokeWidth = elem.getAttribute('stroke-width');
					if (strokeWidth === null || strokeWidth === '') {
						strokeWidth = 1;
					}
					angular.element('#stroke_width').val(strokeWidth);

					// update stroke-style
					var strokeDashArray = elem.getAttribute('stroke-dasharray');
					if (strokeDashArray === null || strokeDashArray === '') {
						strokeDashArray = 'none';
					}
					angular.element('#stroke_style').val(strokeDashArray);
					
					updateToolButtonState();
				} // if (elem !== null)
				
				updateContextPanel();
			};

			function updateContextPanel() {
				var elem = selectedElement;
				angular.element('#selected_panel').hide();
				angular.element('#rect_panel').hide();
				angular.element('#text_panel').hide();
				if (elem !== null) {
					angular.element('#selected_panel').show();
					// update contextual tools here
					switch(elem.tagName) {
						case 'rect':
							angular.element('#rect_panel').show().css('display', 'inline');
							break;
						case 'text':
							// jquery's show() always sets display to block
							angular.element('#text_panel').show().css('display', 'inline');
							angular.element('#font_family').val(elem.getAttribute('font-family'));
							angular.element('#font_size').val(elem.getAttribute('font-size'));
							angular.element('#text').val(elem.textContent);
							angular.element('#text').focus();
							angular.element('#text').select();
							break;
					}
				}	
			}
			
			angular.element('#text').focus( function(){ textBeingEntered = true; } );
			angular.element('#text').blur( function(){ textBeingEntered = false; } );

			// bind the selected event to our function that handles updates to the UI
			svgCanvas.bind('selected', selectedChanged);

			var str = '<div class=\'palette_item\' style=\'background: url(\'images/none.png\');\'></div>';
			angular.element.each(palette, function(i,item){
				str += '<div class=\'palette_item\' style=\'background: ' + item + ';\'></div>';
			});
			angular.element('#palette').append(str);

			var pos = angular.element('#tools_rect_show').position();
			angular.element('#tools_rect').css({'left': pos.left+2, 'top': pos.top+2});
			pos = angular.element('#tools_ellipse_show').position();
			angular.element('#tools_ellipse').css({'left': pos.left+2, 'top': pos.top+2});

			angular.element('#stroke_width').change(function(){
				svgCanvas.setStrokeWidth(this.options[this.selectedIndex].value);
			});

			angular.element('#stroke_style').change(function(){
				svgCanvas.setStrokeStyle(this.options[this.selectedIndex].value);
			});

			angular.element('#stroke_opacity').change(function(){
				svgCanvas.setStrokeOpacity(this.options[this.selectedIndex].value);
			});

			angular.element('#fill_opacity').change(function(){
				svgCanvas.setFillOpacity(this.options[this.selectedIndex].value);
			});

			angular.element('#group_opacity').change(function(){
				svgCanvas.setOpacity(this.options[this.selectedIndex].value);
			});
			
			angular.element('#font_size').change(function(){
				svgCanvas.setFontSize(this.options[this.selectedIndex].value);
			});
			
			angular.element('#font_family').change(function(){
				svgCanvas.setFontFamily(this.options[this.selectedIndex].value);
			});
			
			angular.element('#text').keyup(function(){
				svgCanvas.setTextContent(this.value);
			});
			
			angular.element('#rect_radius').change(function(){
				svgCanvas.setRectRadius(this.options[this.selectedIndex].value);
			});

			angular.element('.palette_item').click(function(evt){
				var id = (evt.shiftKey ? '#stroke_color' : '#fill_color');
				var color = angular.element(this).css('background-color');
				// Webkit-based browsers returned 'initial' here for no stroke
				if (color === 'transparent' || color === 'initial') {
					color = 'none';
					angular.element(id).css('background', 'url(\'images/none.png\')');
				} else {
					angular.element(id).css('background', color);
				}
				if (evt.shiftKey) {
					svgCanvas.setStrokeColor(color);
				} else {
					svgCanvas.setFillColor(color);
				}
				updateToolButtonState();		
			});

			// This is a common function used when a tool has been clicked (chosen)
			// It does several common things:
			// - hides any flyout menus
			// - removes the tool_button_current class from whatever tool currently has it
			// - adds the tool_button_current class to the button passed in
			var toolButtonClick = function(button) {
				if (angular.element(button).hasClass('tool_button_disabled')) {
					return false;
				}
				
				angular.element('#styleoverrides').text('');
				angular.element('.tools_flyout').hide();
				angular.element('.tool_button_current').removeClass('tool_button_current').addClass('tool_button');
				angular.element(button).addClass('tool_button_current');
				// when a tool is selected, we should deselect the currently selected element
				svgCanvas.selectNone();
				return true;
			};

			var clickSelect = function() {
				if (toolButtonClick('#tool_select')) {
					svgCanvas.setMode('select');
					angular.element('#styleoverrides').text('*{cursor:move;pointer-events:all} svg{cursor:default}');
				}
			};

			var clickPath = function() {
				if (toolButtonClick('#tool_path')) {
					svgCanvas.setMode('path');
				}
			};

			var clickLine = function() {
				if (toolButtonClick('#tool_line')) {
					svgCanvas.setMode('line');
				}
			};

			var clickSquare = function(){
				if (toolButtonClick('#tools_rect_show')) {
					svgCanvas.setMode('square');
				}
			};

			var clickRect = function(){
				if (toolButtonClick('#tools_rect_show')) {
					svgCanvas.setMode('rect');
				}
			};

			var clickFHRect = function(){
				if (toolButtonClick('#tools_rect_show')) {
					svgCanvas.setMode('fhrect');
				}
			};

			var clickCircle = function(){
				if (toolButtonClick('#tools_ellipse_show')) {
					svgCanvas.setMode('circle');
				}
			};

			var clickEllipse = function(){
				if (toolButtonClick('#tools_ellipse_show')) {
					svgCanvas.setMode('ellipse');
				}
			};

			var clickFHEllipse = function(){
				if (toolButtonClick('#tools_ellipse_show')) {
					svgCanvas.setMode('fhellipse');
				}
			};

			// Delete is a contextual tool that only appears in the ribbon if
			// an element has been selected
			var deleteSelected = function() {
				if (selectedElement !== null) {
					svgCanvas.deleteSelectedElement();
				}
			};

			var moveToTopSelected = function() {
				if (selectedElement !== null) {
					svgCanvas.moveToTopSelectedElement();
				}
			};

			var moveToBottomSelected = function() {
				if (selectedElement !== null) {
					svgCanvas.moveToBottomSelectedElement();
				}
			};

			var clickText = function(){
				toolButtonClick('#tool_text');
				svgCanvas.setMode('text');
			};

			var clickClear = function(){
				if(window.confirm('Do you want to clear the drawing?') ) {
					svgCanvas.clear();
				}
			};

			var clickSave = function(){
				svgCanvas.save();
			};

			angular.element('#tool_select').click(clickSelect);
			angular.element('#tool_path').click(clickPath);
			angular.element('#tool_line').click(clickLine);
			angular.element('#tool_square').click(clickSquare);
			angular.element('#tool_rect').click(clickRect);
			angular.element('#tool_fhrect').click(clickFHRect);
			angular.element('#tool_circle').click(clickCircle);
			angular.element('#tool_ellipse').click(clickEllipse);
			angular.element('#tool_fhellipse').click(clickFHEllipse);
			angular.element('#tool_text').click(clickText);
			angular.element('#tool_clear').click(clickClear);
			angular.element('#tool_save').click(clickSave);
			angular.element('#tool_delete').click(deleteSelected);
			angular.element('#tool_move_top').click(moveToTopSelected);
			angular.element('#tool_move_bottom').click(moveToBottomSelected);

			// added these event handlers for all the push buttons so they 
			// behave more like buttons being pressed-in and not images
			angular.element('#tool_clear').mousedown(function(){angular.element('#tool_clear').addClass('tool_button_current');});
			angular.element('#tool_clear').mouseup(function(){angular.element('#tool_clear').removeClass('tool_button_current');});
			angular.element('#tool_clear').mouseout(function(){angular.element('#tool_clear').removeClass('tool_button_current');});
			angular.element('#tool_save').mousedown(function(){angular.element('#tool_save').addClass('tool_button_current');});
			angular.element('#tool_save').mouseup(function(){angular.element('#tool_save').removeClass('tool_button_current');});
			angular.element('#tool_save').mouseout(function(){angular.element('#tool_save').removeClass('tool_button_current');});
			angular.element('#tool_delete').mousedown(function(){angular.element('#tool_delete').addClass('tool_button_current');});
			angular.element('#tool_delete').mouseup(function(){angular.element('#tool_delete').removeClass('tool_button_current');});
			angular.element('#tool_delete').mouseout(function(){angular.element('#tool_delete').removeClass('tool_button_current');});
			angular.element('#tool_move_top').mousedown(function(){angular.element('#tool_move_top').addClass('tool_button_current');});
			angular.element('#tool_move_top').mouseup(function(){angular.element('#tool_move_top').removeClass('tool_button_current');});
			angular.element('#tool_move_top').mouseout(function(){angular.element('#tool_move_top').removeClass('tool_button_current');});
			angular.element('#tool_move_bottom').mousedown(function(){angular.element('#tool_move_bottom').addClass('tool_button_current');});
			angular.element('#tool_move_bottom').mouseup(function(){angular.element('#tool_move_bottom').removeClass('tool_button_current');});
			angular.element('#tool_move_bottom').mouseout(function(){angular.element('#tool_move_bottom').removeClass('tool_button_current');});

			// do keybindings using jquery-hotkeys plugin
			angular.element(document).bind('keydown', {combi:'1', disableInInput: true}, clickSelect);
			angular.element(document).bind('keydown', {combi:'2', disableInInput: true}, clickPath);
			angular.element(document).bind('keydown', {combi:'3', disableInInput: true}, clickLine);
			angular.element(document).bind('keydown', {combi:'Shift+4', disableInInput: true}, clickSquare);
			angular.element(document).bind('keydown', {combi:'4', disableInInput: true}, clickRect);
			angular.element(document).bind('keydown', {combi:'Shift+5', disableInInput: true}, clickCircle);
			angular.element(document).bind('keydown', {combi:'5', disableInInput: true}, clickEllipse);
			angular.element(document).bind('keydown', {combi:'6', disableInInput: true}, clickText);
			angular.element(document).bind('keydown', {combi:'N', disableInInput: true}, clickClear);
			angular.element(document).bind('keydown', {combi:'S', disableInInput: true}, clickSave);
			angular.element(document).bind('keydown', {combi:'X', disableInInput: true}, deleteSelected);
			
			var colorPicker = function(elem) {
				angular.element('.tools_flyout').hide();
				var oldbg = elem.css('background');
				var color = elem.css('background-color');
				var wasNone = false;
				if (color === 'transparent') {
					color = new $.jPicker.Color({ hex: 'ffffff' });
					wasNone = true;
				} else {
					if (color.length === 7 && color[0] === '#') { // #hheexx notation
						color = new $.jPicker.Color( { hex: color.substring(1,7) } );
					} else if (color.substring(0,4) === 'rgb(' && color[color.length-1] === ')') { // rgb(r,g,b) notation
						var rgb = color.substring(4,color.length-1).split(',');
						color = new $.jPicker.Color({ r: rgb[0], g: rgb[1], b: rgb[2] });
					} else {
						color = new $.jPicker.Color({ hex: 'ffffff' });
					}
				}
				var pos = elem.position();
				angular.element('#color_picker').css({'left': pos.left, 'top': pos.top}).jPicker({
					images: { clientPath: 'jpicker/images/' },
					color: { active: color }
				}, function(){
					elem.css('background', '#' + this.settings.color.active.hex);
					if (elem.attr('id') === 'stroke_color') {
						svgCanvas.setStrokeColor('#' + this.settings.color.active.hex);
					} else if (elem.attr('id') === 'fill_color') {
						svgCanvas.setFillColor('#' + this.settings.color.active.hex);
					}
					angular.element('#color_picker').hide();
				}, null, function(){
					elem.css('background', oldbg);
					if (wasNone) {
						if (elem.attr('id') === 'stroke_color') {
							svgCanvas.setStrokeColor('none');
						} else if (elem.attr('id') === 'fill_color') {
							svgCanvas.setFillColor('none');
						}
					}
					angular.element('#color_picker').hide();
				});
			};

			function updateToolButtonState() {
				var index, button;
				var bNoFill = (svgCanvas.getFillColor() === 'none');
				var bNoStroke = (svgCanvas.getStrokeColor() === 'none');
				var buttonsNeedingStroke = [ '#tool_path', '#tool_line' ];
				var buttonsNeedingFillAndStroke = [ '#tools_rect_show', '#tools_ellipse_show', '#tool_text' ];
				if (bNoStroke) {
					for (index in buttonsNeedingStroke) {
						button = buttonsNeedingStroke[index];
						if (angular.element(button).hasClass('tool_button_current')) {
							clickSelect();
						}
						angular.element(button).removeClass('tool_button').addClass('tool_button_disabled');
					}
				}
				else {
					for (index in buttonsNeedingStroke) {
						button = buttonsNeedingStroke[index];
						angular.element(button).removeClass('tool_button_disabled').addClass('tool_button');
					}
				}
				
				if (bNoStroke && bNoFill) {
					for (index in buttonsNeedingFillAndStroke) {
						button = buttonsNeedingFillAndStroke[index];
						if (angular.element(button).hasClass('tool_button_current')) {
							clickSelect();
						}
						angular.element(button).removeClass('tool_button').addClass('tool_button_disabled');
					}
				}
				else {
					for (index in buttonsNeedingFillAndStroke) {
						button = buttonsNeedingFillAndStroke[index];
						angular.element(button).removeClass('tool_button_disabled').addClass('tool_button');
					}
				}
			}
			
			angular.element('#fill_color').click(function(){
				colorPicker(angular.element(this));
				updateToolButtonState();
			});

			angular.element('#stroke_color').click(function(){
				colorPicker(angular.element(this));
				updateToolButtonState();
			});

			// this hides any flyouts and then shows the rect flyout
			angular.element('#tools_rect_show').click(function(){
				angular.element('.tools_flyout').hide();
				angular.element('#tools_rect').show();
			});

			// this hides any flyouts and then shows the circle flyout
			angular.element('#tools_ellipse_show').click(function(){
				angular.element('.tools_flyout').hide();
				angular.element('#tools_ellipse').show();
			});

			return svgCanvas;
			
			
		}
	};
});