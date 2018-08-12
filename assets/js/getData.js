let description = [], name = [], topics = [], stars = [], url = [];
$.getJSON('./misc/gitData.json', function (data) {
    const repositories = data.data.user.repositories.nodes;
    $.each(repositories, function (index, value) {
        description.push(value.description);
        name.push(value.name);
        topics.push(value.repositoryTopics.nodes);
        url.push(value.url);
    });
    putData('project-title', name);
    putData('project-des', description);
    putData('project-footer', topics);
});
function putData(className, dataNode) {
    $.each($('.' + className), function (index, node) {
        if (className === 'project-footer') {
            badgeClass = ['badge-primary', 'badge-success', 'badge-danger', 'badge-warning'];
            $.each(dataNode[index], function (idx, val) {
                let div = document.createElement('div');
                div.className = 'badge badge-pill text-uppercase ' + badgeClass[idx % 4];
                div.innerText = val.topic.name;

                node.appendChild(div);
            });
        }
        else {
            if (className === 'project-title') {
                $(this).attr('href', url[index]);
            }
            node.innerText = dataNode[index].replace(/_/g, ' ').replace(/-/g, ' ').replace(/and/g, '&');
        }
    });
}