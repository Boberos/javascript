<?php
include_once 'dane.php';


$rnd_par = create_random_parameter($parameters,$settings);
$rnd_obj_list = create_objects_array($num,$rnd_par);
$rnd_json_data = create_random_json_data($rnd_obj_list);
save_json_data($dir,$rnd_json_data);

function save_json_data($dir,$data){
	
	$fp = fopen($dir, 'w');
	fwrite($fp, $data);
	fclose($fp);
}

function create_random_json_data($data){
	$list ="{".PHP_EOL;
	$licznik =0;
	
	foreach($data as $a => $b){
			
		$list .= '"'.$a.'" :  '.PHP_EOL.'{'.PHP_EOL;
		$count=0;
			
		foreach ($b as $c => $d ){
			if($count<count($b)-1){
				$list .= '		"'.$c.'" : "'.$d.'",'.PHP_EOL;
			}else{
				$list .= '		"'.$c.'" : "'.$d.'"'.PHP_EOL.PHP_EOL;
			}
			$count++;
		}
		if($licznik<count($data)-1){
			$list .="},".PHP_EOL;
		}else{
			$list .="}".PHP_EOL;
		}
		$licznik++;
	}
	$list .="}".PHP_EOL;
	return $list;
};

function create_objects_array($number,$rnd_par){
	$array=array();
	$obiect = "obiectX_";
	for($i=1;$i<=$number;$i++){
		$array[$obiect.$i] = $rnd_par; 
	}
	
	return $array;
}

function create_random_parameter($data,$settings){

	$param_list = array();
	
	foreach ($data as $key => $item){
		foreach ($settings[$item] as $a => $b)
			if(strcmp($data[$key],$settings[$item][$a])==true){
				$rnd = rand(0,count($settings[$item])-1);
				$param_list[$data[$key]]=$settings[$item][$rnd];	
			}
	};
	
	return $param_list;
}










