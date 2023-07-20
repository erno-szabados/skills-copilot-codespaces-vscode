function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkillsMemberController',
        controlerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}