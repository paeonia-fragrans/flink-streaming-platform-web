

function stop(id) {
    $.post("../api/stop", {
            id: id
        },
        function (data, status) {
            if (data!=null && data.success){
                alert("执行成功 请稍后刷新");
                window.location.reload();
            }else{
                alert("执行失败："+data.message)
                window.location.reload();
            }

        }
    );
}
function id) {
    $.post("../api/start", {
            id: id

        },
        function (data, status) {
            if (data!=null && data.success){
                alert("执行成功 请稍后刷新");
                window.location.reload();
            }else{
                alert("执行失败："+data.message)
                window.location.reload();
            }

        }
    );
}


function deleteConfig(id) {
    if(confirm('确定要删除吗')==true){
        $.post("../api/delete", {
                id: id
            },
            function (data, status) {
                if (data!=null && data.success){
                    window.location.reload();
                }else{
                    alert("执行失败："+data.message)
                }
            }
        );

    }else{
        return false;

    }

}

function openConfig(id) {
    $.post("../api/open", {
            id: id
        },
        function (data, status) {
            if (data!=null && data.success){
                alert("执行成功");
                window.location.reload();
            }else{
                alert("执行失败："+data.message)
            }

        }
    );
}


function closeConfig(id) {
    $.post("../api/close", {
            id: id
        },
        function (data, status) {
            if (data!=null && data.success){
                alert("执行成功");
                window.location.reload();
            }else{
                alert("执行失败："+data.message)
            }

        }
    );
}

function searchForm(pageNum) {
    $("#pageNum").attr("value", pageNum);
    $("form[name='search']").submit();

}


