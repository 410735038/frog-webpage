'use strict';

// define angular app (with dependency on Wijmo)
var app = angular.module('app', ['wj']);

var cnt = 0;
var correct = 0;
// define app's single controller
app.controller('appCtrl', function ($scope) {
    var cols = document.querySelectorAll('#columns .column');
    [].forEach.call(cols, function (col) {
        col.addEventListener('dragstart', handleDragStart, false);
        col.addEventListener('dragenter', handleDragEnter, false)
        col.addEventListener('dragover', handleDragOver, false);
        col.addEventListener('dragleave', handleDragLeave, false);
        col.addEventListener('drop', handleDrop, false);
        col.addEventListener('dragend', handleDragEnd, false);
    });

    var dragSrcEl = null;
    function handleDragStart(e) {
        if (e.target.className.indexOf('column') > -1) {
            // console.log(e.target.nodeName);
            if(e.target.nodeName == 'IMG'){
                dragSrcEl = e.target;
                dragSrcEl.style.opacity = '0.4';
                var dt = e.dataTransfer;
                dt.setData('text', dragSrcEl.id);
            }
            else{
                // dragSrcEl = e.target;
                // dragSrcEl.style.opacity = '0.4';
                // var dt = e.dataTransfer;
                // dt.effectAllowed = 'move';
                // dt.setData('text', dragSrcEl.innerHTML);
    
                // customize drag image for one of the panels
                // if (dt.setDragImage instanceof Function && e.target.innerHTML.indexOf('X') > -1) {
                //     var img = new Image();
                //     img.src = 'dragimage.jpg';
                //     dt.setDragImage(img, img.width / 2, img.height / 2);
                // }
            }
            
        }
    }
    function handleDragOver(e) {
        if (dragSrcEl) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        }
    }
    function handleDragEnter(e) {
        if (dragSrcEl) {
            e.target.classList.add('over');
        }
    }
    function handleDragLeave(e) {
        if (dragSrcEl) {
            e.target.classList.remove('over');
        }
    }
    function handleDragEnd(e) {
        dragSrcEl = null;
        [].forEach.call(cols, function (col) {
            col.style.opacity = '';
            col.classList.remove('over');
        });
    }
    function handleDrop(e) {
        if (dragSrcEl) {
            e.stopPropagation();
            e.stopImmediatePropagation();
            e.preventDefault();
            if(dragSrcEl.nodeName == 'IMG'){
                if (dragSrcEl != this) {
                    var data = e.dataTransfer.getData("text");
                    if(e.target.nodeName == 'DIV'){
                        // console.log(e.target.id[0]+e.target.id[1]);
                        var pushed = e.target.id[0] + e.target.id[1]
                        var Cfrom = dragSrcEl.parentElement.id[0] + dragSrcEl.parentElement.id[1];
                        if(pushed == 'QB'){
                            var x = document.getElementById(data);
                            // console.log(x);
                            x.style.height = "90%"; x.style.width = "90%";
                            e.target.appendChild(x);
                            document.getElementById('QT' + e.target.id[2]).innerHTML = ans[dragSrcEl.id[5]-1];                                                        
                            if(cnt != 0 && pushed != Cfrom){
                                cnt--;
                            }
                            if(correct != 0 && pushed != Cfrom){
                                if(ans[dragSrcEl.id[5]-1] == document.getElementById('Ans' + dragSrcEl.parentElement.id[2]).innerHTML)
                                    correct--;
                            }                                 
                            console.log(correct);  
                            console.log(cnt);                                              
                        }
                        else if(pushed == 'AB'){
                            var x = document.getElementById(data);
                            x.style.height = "75%"; x.style.width = "90%";
                            e.target.appendChild(x);
                            cnt++;
                            
                            if(ans[dragSrcEl.id[5]-1] == document.getElementById('Ans' + e.target.id[2]).innerHTML && pushed != 'QB'){
                                correct++;
                            }
                            console.log(correct);
                            console.log(cnt);
                        }
                        // console.log(correct);
                        // console.log(cnt);
                    }    
                }
            }
            // else{
            //     if (dragSrcEl != this) {
            //     dragSrcEl.innerHTML = e.target.innerHTML;
            //     this.innerHTML = e.dataTransfer.getData('text');
            //     }
            // } 
            if(cnt == 5){
                var z = document.querySelector('.cntFull');
                var y = document.querySelector('.top_img');
                z.style.display = 'block';
                y.style.display = 'none';            
            }
        }
    }

    //-----------------------------------------------------------------------------
    // define some sample data for the FlexGrid and Olap controls
    var products = 'Alpina,Gumpert,Isdera,Keinath,Adler,Borgward'.split(','),
        countries = 'USA,UK,Japan,Germany'.split(',');
    $scope.data = [];
    for (var i = 0; i < 100; i++) {
        $scope.data.push({
            id: i,
            product: products[i % products.length],
            country: countries[i % countries.length],
            sales: Math.round(20 + Math.random() * 100),
            inquiries: Math.round(100 + Math.random() * 1000)
        })
    }
});
