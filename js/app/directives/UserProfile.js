function UserProfile() {
	return {
		// transclude: true,
		transclude: {
      name: 'h4',
      position: 'h6',
			description: 'p'

    },
		template: [
			'<div class="UserProfile">',
				'<h3>User Profile</h3>',
				'<p>Name:</p>',
				'<div ng-transclude="name"></div>',
				'<p>Position</p>',
				'<div ng-transclude="position"></div>',
				'<p>Description</p>',
				'<div ng-transclude="description"></div>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);
