<?php
$collection = explode(",",$_GET["collection"]);
$color = $_GET["color"];
$category = explode(",",$_GET["category"]);
$minprice = $_GET["minprice"];
$maxprice = $_GET["maxprice"];

$data = array(
    array(
        "product_ID" => "1", "product_Name" => "Lounge", "color" => "blue", "product_Price" => "3600",  "product_Rating" => "4", "brand" => "Coombes", "product_Image" => "./assets/images/lounge_1.jpg"
        ),
    array(
        "product_ID" => "2", "product_Name" => "Lounge", "color" => "brown", "product_Price" => "8000",  "product_Rating" => "3", "brand" => "Keeve Set", "product_Image" => "./assets/images/lounge_2.jpg"
        ),
    array(
        "product_ID" => "3", "product_Name" => "Lounge", "color" => "black", "product_Price" => "3000",  "product_Rating" => "5", "brand" => "Nille", "product_Image" => "./assets/images/lounge_3.jpg"
        ),
    array(
        "product_ID" => "4", "product_Name" => "Lounge", "color" => "yellow", "product_Price" => "2300",  "product_Rating" => "4", "brand" => "Coombes", "product_Image" => "./assets/images/lounge_4.jpg"
        ),
    array(
        "product_ID" => "5", "product_Name" => "Lounge", "color" => "black", "product_Price" => "3900",  "product_Rating" => "4", "brand" => "Coombes", "product_Image" => "./assets/images/lounge_5.jpg"
    ),
    array(
        "product_ID" => "6", "product_Name" => "Table & Chair", "color" => "black", "product_Price" => "7600",  "product_Rating" => "5", "brand" => "Momo", "product_Image" => "./assets/images/table_chair_1.jpg"
    ),
    array(
        "product_ID" => "7", "product_Name" => "Table & Chair", "color" => "white", "product_Price" => "7800",  "product_Rating" => "3", "brand" => "Kappu", "product_Image" => "./assets/images/table_chair_2.jpg"
    ),
    array(
        "product_ID" => "8", "product_Name" => "Table & Chair", "color" => "black", "product_Price" => "8000",  "product_Rating" => "4", "brand" => "Kappu", "product_Image" => "./assets/images/table_chair_3.jpg"
    ),
    array(
        "product_ID" => "9", "product_Name" => "Table & Chair", "color" => "brown", "product_Price" => "7500",  "product_Rating" => "5", "brand" => "Momo", "product_Image" => "./assets/images/table_chair_4.jpg"
    ),
    array(
        "product_ID" => "10", "product_Name" => "Table & Chair", "color" => "white", "product_Price" => "6200",  "product_Rating" => "3", "brand" => "Coombes", "product_Image" => "./assets/images/table_chair_5.jpg"
    ),
    array(
        "product_ID" => "11", "product_Name" => "Chair", "color" => "blue", "product_Price" => "2600",  "product_Rating" => "4", "brand" => "Kappu", "product_Image" => "./assets/images/chair_1.jpg"
    ),
    array(
        "product_ID" => "12", "product_Name" => "Chair", "color" => "blue", "product_Price" => "2700",  "product_Rating" => "3", "brand" => "Nille", "product_Image" => "./assets/images/chair_2.jpg"
    ),
    array(
        "product_ID" => "13", "product_Name" => "Chair", "color" => "blue", "product_Price" => "2900",  "product_Rating" => "3", "brand" => "Nille", "product_Image" => "./assets/images/chair_3.jpg"
    ),
    array(
        "product_ID" => "14", "product_Name" => "Shelf", "color" => "white", "product_Price" => "5600",  "product_Rating" => "5", "brand" => "Coombes", "product_Image" => "./assets/images/shelf_1.jpg"
    ),
    array(
        "product_ID" => "15", "product_Name" => "Shelf", "color" => "black", "product_Price" => "6000",  "product_Rating" => "4", "brand" => "Momo", "product_Image" => "./assets/images/shelf_2.jpg"
    ),
    array(
        "product_ID" => "16", "product_Name" => "Shelf", "color" => "white", "product_Price" => "6000",  "product_Rating" => "3", "brand" => "Kappu", "product_Image" => "./assets/images/shelf_3.jpg"
    ),
    array(
        "product_ID" => "17", "product_Name" => "Shelf", "color" => "yellow", "product_Price" => "7100",  "product_Rating" => "3", "brand" => "Nille", "product_Image" => "./assets/images/shelf_4.jpg"
    ),
    array(
        "product_ID" => "18", "product_Name" => "Shelf", "color" => "yellow", "product_Price" => "7100",  "product_Rating" => "5", "brand" => "Keeve Set", "product_Image" => "./assets/images/shelf_5.jpg"
    ),
    array(
        "product_ID" => "19", "product_Name" => "Bed", "color" => "white", "product_Price" => "12000",  "product_Rating" => "3", "brand" => "Kappu", "product_Image" => "./assets/images/bed_1.jpg"
    ),
    array(
        "product_ID" => "20", "product_Name" => "Bed", "color" => "white", "product_Price" => "14000",  "product_Rating" => "4", "brand" => "Kappu", "product_Image" => "./assets/images/bed_2.jpg"
        ),
    array(
        "product_ID" => "21", "product_Name" => "Bed", "color" => "white", "product_Price" => "15000",  "product_Rating" => "5", "brand" => "Keeve Set", "product_Image" => "./assets/images/bed_3.jpg"
        ),
    array(
        "product_ID" => "22", "product_Name" => "Bed", "color" => "white", "product_Price" => "16000",  "product_Rating" => "5", "brand" => "Nille", "product_Image" => "./assets/images/bed_4.jpg"
        ),
    array(
        "product_ID" => "23", "product_Name" => "Bed", "color" => "blue", "product_Price" => "12500",  "product_Rating" => "4", "brand" => "Nille", "product_Image" => "./assets/images/bed_5.jpg"
        )

);


$getData = $data;
    if ($collection[0] != "All") {
        # code...
        $temp = array();
        for ($i=0; $i < count($getData); $i++) { 
            # code...
            for ($j=0; $j < count($collection); $j++) {
                if(strtolower($getData[$i]["brand"]) == strtolower($collection[$j]) )
                    array_push($temp, $getData[$i]);
            }
        }
        $getData = $temp;
    }
    if ($category[0] != "All") {
        # code...
        $temp = array();
        for ($i=0; $i < count($getData); $i++) { 
            # code...
            for ($j=0; $j < count($collection); $j++) {
                if(strtolower($getData[$i]["product_Name"]) == strtolower($category[$j]) )
                    array_push($temp, $getData[$i]);
            }
           }
           $getData = $temp;
    }
    if ($color != "All") {
        # code...
        $temp = array();
        for ($i=0; $i < count($getData); $i++) { 
            # code...
                if(strtolower($getData[$i]["color"]) == strtolower($color))
                    array_push($temp, $getData[$i]);
        }
        $getData = $temp;
    }
    
        $temp = array();
        for ($i=0; $i < count($getData); $i++) { 
            # code...
                if($getData[$i]["product_Price"] >= $minprice && $getData[$i]["product_Price"] <= $maxprice)
                    array_push($temp, $getData[$i]);
        }
        $getData = $temp;
    

    echo json_encode($getData);



?>