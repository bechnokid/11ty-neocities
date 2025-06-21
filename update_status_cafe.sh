#!/bin/bash

# https://goeshard.org/2025/05/11/intercepting-requests-to-unlock-hidden-functionality/ Thank you!!

text="$1"
emoji="$2"

encoded_text=$(printf "%s" "$text" | jq -sRr '@uri' | sed 's/%20/+/g')
encoded_emoji=$(printf "%s" "$emoji" | jq -sRr '@uri')

size=${#encoded_text}
if [ $size -gt 160 ]; then
  echo "Text has to be less than 160 characters"
else
  curl 'https://status.cafe/add' \
  -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Cache-Control: max-age=0' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -b '_gorilla_csrf=MTc1MDI0OTk3N3xJbkJLYlVORk1XVXpNMGR6T1cwMFZIQklXa3BDZVRVNGFIRm5WMGQ2U1hneFJYaDJabVJLTkVKbmRGazlJZ289fF8v92aY55_ZLwcfzRUVTzZmxsQtJsTaDF6YDkZhUDQV; status=MTc1MDI1MDA4MXxEdi1CQkFFQ180SUFBUkFCRUFBQUpfLUNBQUVHYzNSeWFXNW5EQVlBQkc1aGJXVUdjM1J5YVc1bkRBc0FDV0psWTJodWIydHBaQT09fBt1dOLIIlucuvfv8eZuINYh2OeB8FvmlbkFK8kzSWGE' \
  -H 'Origin: https://status.cafe' \
  -H 'Referer: https://status.cafe/' \
  -H 'Sec-Fetch-Dest: document' \
  -H 'Sec-Fetch-Mode: navigate' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'Sec-Fetch-User: ?1' \
  -H 'Upgrade-Insecure-Requests: 1' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36 Edg/136.0.0.0' \
  -H 'sec-ch-ua: "Chromium";v="136", "Microsoft Edge";v="136", "Not.A/Brand";v="99"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Windows"' \
  --data-raw "gorilla.csrf.Token=MiAdHcSyxykdtU9btKeQC5WU%2FsU85zCAH1I1fh32GLCWuZ8OkwUbQiAuy7KpNdHACrVUwLorvPUMSeoKg%2FeaZg%3D%3D&face=$encoded_emoji&content=$encoded_text"
fi