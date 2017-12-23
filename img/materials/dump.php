<?php

$names = json_decode(file_get_contents("layers.json"));
foreach ($names as $name) {
    if (strlen($name) === 0) continue;
    copy("https://my.callofduty.com/content/dam/atvi/callofduty/mycod/emblems/wwii/materials/{$name}", $name);
}