$(document).ready(function(){function t(){let t=$("#taskInput").val();""!==t?($("#taskList").append(`<li class="taskItem"><input type="checkbox" class="checkbox">${t.charAt(0).toUpperCase()+t.slice(1)}<input type="date" class="form-control-sm" id="dueDate" name="dueDate" placeholder="Due Date"><button class="delete">X</button></li>`),$("#taskInput").val(""),e(),$("#taskInput").focus()):($("#taskInput").focus(),$("#taskInput").attr("placeholder","Please enter a task!"),$("#taskInput").css("backgroundColor","rgba(255, 0, 0, 0.3)"),$("#taskInput").css("color","white"),setTimeout(function(){$("#taskInput").attr("placeholder","Add a new task..."),$("#taskInput").css("color","black"),$("#taskInput").css("backgroundColor","white")},1e3))}function e(){let t=$("#taskList").html();localStorage.setItem("taskList",t)}$("#taskInput").focus(),$("#addTaskButton").on("click",t),$("#taskList").on("click",".delete",function(){$(this).parent().remove(),$("#taskInput").focus(),e()}),$("#taskList").on("click",".checkbox",function(){$(this).parent().toggleClass("complete"),e(),$("#taskInput").focus()}),$("#clearAllButton").on("click",function(){$("#taskList").empty(),e(),$("#taskInput").focus()}),$("#clearCompletedButton").on("click",function(){$(".complete").remove(),e(),$("#taskInput").focus()}),$("#toggleShowCompleted").on("click",function(){"Show Completed"===$("#toggleShowCompleted").text()?$("#toggleShowCompleted").text("Hide Completed"):$("#toggleShowCompleted").text("Show Completed"),$(".complete").toggle()}),$("#taskInput").keypress(function(e){13===e.which&&t()}),function(){let t=localStorage.getItem("taskList");$("#taskList").html(t),$(".taskItem").each(function(){$(this).hasClass("complete")&&$(this).children(".checkbox").prop("checked",!0)})}()}),function(){let t=new Date,e=t.getDate(),o=t.getMonth()+1,s=t.getFullYear();$("#currentDate").text(`Today is ${o}/${e}/${s}`)}();
//# sourceMappingURL=index.8c6e234b.js.map