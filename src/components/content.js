module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('content', {
        fbtemplate: 'formio/formbuilder/content.html',
        icon: 'fa fa-html5',
        documentation: 'http://help.form.io/userguide/#content-component',
        controller: function(settings, $scope) {
          $scope.ckeditorOptions = {
            toolbarGroups:  [
              {name: 'basicstyles', groups: ['basicstyles', 'cleanup']},
              {name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph']},
              {name: 'links', groups: ['links']},
              {name: 'insert', groups: ['insert']},
              '/',
              {name: 'styles', groups: ['styles']},
              {name: 'colors', groups: ['colors']},
              {name: 'clipboard', groups: ['clipboard', 'undo']},
              {name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing']},
              {name: 'forms', groups: ['forms']},
              {name: 'document', groups: ['mode', 'document', 'doctools']},
              {name: 'others', groups: ['others']},
              {name: 'tools', groups: ['tools']}
            ],
            removeButtons: 'Cut,Copy,Paste,Underline,Subscript,Superscript,Scayt,About',
            uiColor: '#eeeeee',
            height: '400px',
            width: '100%'
          };
          $scope.$watch('component.html', function() {
            $scope.$emit('formBuilder:update');
          });
        },
        views: [
          {
            name: 'Display',
            template: 'formio/components/common/display.html'
          },
          {
            name: 'API',
            template: 'formio/components/common/api.html'
          },
          {
            name: 'Conditional',
            template: 'formio/components/common/conditional.html'
          }
        ]
      });
    }
  ]);
  app.run([
    '$templateCache',
    function($templateCache) {
      $templateCache.put('formio/formbuilder/content.html',
        '<div class="form-group">' +
          '<textarea ckeditor="ckeditorOptions" ng-model="component.html"><textarea>' +
        '</div>'
      );
      $templateCache.put('formio/components/common/display.html',
        '<ng-form>' +
          '<form-builder-option property="customClass"></form-builder-option>' +
        '</ng-form>'
      );
    }
  ]);
};
