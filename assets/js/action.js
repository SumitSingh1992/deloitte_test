// Variable declaration and initialization
  var coll = ["All"]; // variable for collections/brands selected
  var cat = ["All"]; // variable for Categories selected
  var color = "All"; // variable for Colors selected
  var minprice = 2000; // Default Minimum price
  var maxprice = 10000; // Default Maximum price
  // Arrays to check filter option elements added or not
  var brandArr = [];
  var colorArr = [];
  var catArr = [];
  // For pagination
  var pageNumber = 0;
  var totalPage = 0;
  var minPage = 0;
      var maxPage = 8;
      var result = [];


    window.onload=function(){
      // Fetch all data initially
      getAll(coll, cat, color, minprice, maxprice);
      // Jquery UI slider
      $( "#slider-range" ).slider({
      range: true,
      min: 1300,
      max: 20000,
      values: [ 1500, 20000 ],
      stop: function( event, ui ) {
        $( "#min" ).text( "$" + ui.values[0] );
        $( "#max" ).text( "$" + ui.values[1] );
        // Fetch data within price range
        getItem(coll, cat, color, ui.values[0], ui.values[1]);
      }
    });
    // End of Jquery UI slider
    }

    // Function for filter data according to page number selected
    function filterPageNum(page){
      // calculate minimum and maximum page index to load
      minPage = page * 8; 
      maxPage = (page + 1) * 8;
      // Remove all existing itmes first to add new one filtered
      $('.items').html("");
      for (let index = minPage; index < maxPage; index++) {
                let item = '<div class="col-3 col-m-6 col-s-12">'+
                            '<div class="card">'+
                            '<div class="card-container"><img src="'+result[index].product_Image+'"></div>'+
                            '<div class="card-footer">'+
                            '<div class="brand">'+result[index].brand+'</div>'+
                            '<div class="row">'+
                            '<div class="product-name inline-flex">'+result[index].product_Name+'</div>'+
                            '<div class="product-price float-right"><span>$'+result[index].product_Price+'</span></div></div>'+
                            '<div class="row">'+
                            '<div class="product-rating inline-flex">';
                            for (let j = 0; j < 5; j++) {
                              if (j < result[index].product_Rating) {
                                item += '<span><i class="fa fa-star"></i></span>';
                              }
                              else{
                                item += '<span><i class="fa fa-star-o"></i></span>';
                              }
                              
                            }
                            item += '</div>'+
                                    '<div class="product-cart float-right">'+
                                    '<i class="fa fa-cart-plus"></i></div></div></div></div></div>';
            
                                    $('.items').append(item);
              }
    }

    // Function to check what are all filters to apply
    function filterData(){
      // temporary variables
      var tempColl = [];
      var tempCat = [];
      // Fetching selected checkbox filter values for collection and categories
      $.each($("input[name='brands']:checked"), function(){
        tempColl.push($(this).val());
            });

            $.each($("input[name='categories']:checked"), function(){
              tempCat.push($(this).val());
            });
            // fetching selected filter value for color
            color = $("input[name='colors']:checked").val();
            if (tempColl.length > 0) {
              coll = tempColl;
            }
            else{
              coll = "All";
            }
            if (tempCat.length > 0) {
              cat = tempCat;
            }
            else{
              cat = ["All"];
            }
            if (color == undefined) {
              color = ["All"];
            }
            // Fetch selected items only according to filter applied
            getItem(coll, cat, color, minprice, maxprice);
    }
   
  //  Function to get all data
   function getAll(coll, cat, color, minprice, maxprice) {
    $.ajax({
            url: "./dataset/data.php?collection="+coll+"&category="+cat+"&color="+color+"&minprice="+minprice+"&maxprice="+maxprice,
            type: 'GET',
            datatype: "json",
            contentType: "text/html",
            success: function (res) {
              result = eval(res);
              $('.loading').hide();
              // calculate page Numbers for pagination
              totalPage = result.length;
              if (totalPage < 8) {
                maxPage = totalPage;
              }
              else{
                maxPage = 8;
              }
              pageNumber = Math.ceil(totalPage/8);

              // iterate through number of pages to add pagination button
              for (let index = 0; index < pageNumber; index++) {
                var btnElement = '<button value="btn_' + (index + 1) + '" onclick="filterPageNum('+ (index) +');">' + (index + 1) + '</button>';
                $('.footer').append(btnElement);
              }

               // iterate all data to add collection filter options
              for (let index = 0; index < result.length; index++) {
                if (brandArr.indexOf(result[index].brand) < 0) {
                  let brands = '<label><input type="checkbox" name="brands" value="'+result[index].brand+'" />'+result[index].brand+'</label>';
                  $('.collection-list').append(brands);
                  brandArr.push(result[index].brand);
                }
                
                // iterate all data to add colors filter options
                if (colorArr.indexOf(result[index].color) < 0) {
                  let colors = '<label><input type="radio" name="colors" value="'+result[index].color+'" />'+result[index].color+'</label>';
                $('.color-list').append(colors);
                colorArr.push(result[index].color);
                }

                // iterate all data to add category filter options
                if (catArr.indexOf(result[index].product_Name) < 0) {
                  let categories = '<label><input type="checkbox" name="categories" value="'+result[index].product_Name+'" />'+result[index].product_Name+'</label>';
                $('.category-list').append(categories);
                catArr.push(result[index].product_Name);
                }
              }

              // iterate all data to add filtered Items
              for (let index = minPage; index < maxPage; index++) {
                  let item = '<div class="col-3 col-m-6 col-s-12">'+
                            '<div class="card">'+
                            '<div class="card-container"><img src="'+result[index].product_Image+'"></div>'+
                            '<div class="card-footer">'+
                            '<div class="brand">'+result[index].brand+'</div>'+
                            '<div class="row">'+
                            '<div class="product-name inline-flex">'+result[index].product_Name+'</div>'+
                            '<div class="product-price float-right"><span>$'+result[index].product_Price+'</span></div></div>'+
                            '<div class="row">'+
                            '<div class="product-rating inline-flex">';
                            for (let j = 0; j < 5; j++) {
                              if (j < result[index].product_Rating) {
                                item += '<span><i class="fa fa-star"></i></span>';
                              }
                              else{
                                item += '<span><i class="fa fa-star-o"></i></span>';
                              }
                              
                            }
                            item += '</div>'+
                                    '<div class="product-cart float-right">'+
                                    '<i class="fa fa-cart-plus"></i></div></div></div></div></div>';
            
                                    $('.items').append(item);
              }
              // Add Apply buttons to each filter option area
              var applyBtn = '<div style="text-align: right;"><button value="filter" class="filter_btn" onclick="filterData();">Apply</button></div>';
                  $('.collection-list').append(applyBtn);
                  $('.color-list').append(applyBtn);
                  $('.category-list').append(applyBtn);
                  $('.footer button:first-child').focus();
            },
            error: function (xhr, responseText) {
                alert("Error");
            }
        });
        }
        
        // Function to get selected filter data
function getItem(coll, cat, color, minprice, maxprice){
    $('.items').html("");
    $('.footer').html("");
    result = [];
    $.ajax({
            url: "./dataset/data.php?collection="+coll+"&category="+cat+"&color="+color+"&minprice="+minprice+"&maxprice="+maxprice,
            type: 'GET',
            datatype: "json",
            contentType: "text/html",
            success: function (res) {
              result = eval(res);
              console.log(result);
              // calculate page Numbers for pagination
              totalPage = result.length;
              if (totalPage == 0) {
                var noRecord = '<div class="loading"><h2>No Record Found</h2></div>';
                $('.items').append(noRecord);
              }
              if (totalPage < 8) {
                maxPage = totalPage;
              }
              else{
                maxPage = 8;
              }
              pageNumber = Math.ceil(totalPage/8);
              // iterate through number of pages to add pagination button
              for (let index = 0; index < pageNumber; index++) {
                var btnElement = '<button value="btn_' + (index + 1) + '" onclick="filterPageNum('+ (index) +');">' + (index + 1) + '</button>';
                $('.footer').append(btnElement);
              }
              // iterate all data to add filtered Items
              for (let index = minPage; index < maxPage; index++) {
                let item = '<div class="col-3 col-m-6 col-s-12">'+
                            '<div class="card">'+
                            '<div class="card-container"><img src="'+result[index].product_Image+'"></div>'+
                            '<div class="card-footer">'+
                            '<div class="brand">'+result[index].brand+'</div>'+
                            '<div class="row">'+
                            '<div class="product-name inline-flex">'+result[index].product_Name+'</div>'+
                            '<div class="product-price float-right"><span>$'+result[index].product_Price+'</span></div></div>'+
                            '<div class="row">'+
                            '<div class="product-rating inline-flex">';
                            for (let j = 0; j < 5; j++) {
                              if (j < result[index].product_Rating) {
                                item += '<span><i class="fa fa-star"></i></span>';
                              }
                              else{
                                item += '<span><i class="fa fa-star-o"></i></span>';
                              }
                              
                            }
                            item += '</div>'+
                                    '<div class="product-cart float-right">'+
                                    '<i class="fa fa-cart-plus"></i></div></div></div></div></div>';
            
                                    $('.items').append(item);
              }
            },
            error: function (xhr, responseText) {
                alert("Error");
            }
        });
        }

        function toggleList(list){
          $('.hidden-list').hide(100);
          $('.'+list).toggle(800);
        }