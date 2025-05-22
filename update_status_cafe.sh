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
    -b '_gorilla_csrf=MTc0NzMxNTMyMXxJako2WlZaWk5sWjZZMlJZVWlzNGIweFdUVUZTYkhRM1VFdE1ZelpKUW1zNGExZ3hhalkzVnpJd05UUTlJZ289fN9p7s3L3yNVFO8-BFNELY5hk2S1z2rDBGFqlXiJzR4-; status=MTc0NzMxODM5MHxEdi1CQkFFQ180SUFBUkFCRUFBQUpfLUNBQUVHYzNSeWFXNW5EQVlBQkc1aGJXVUdjM1J5YVc1bkRBc0FDV0psWTJodWIydHBaQT09fAw3cmtJN7wyQ2OwTw7rgmBXKLlWWvcZ-xFwFFfuxDUn' \
    -H 'Origin: https://status.cafe' \
    -H 'Referer: https://status.cafe/' \
    -H 'Sec-Fetch-Dest: document' \
    -H 'Sec-Fetch-Mode: navigate' \
    -H 'Sec-Fetch-Site: same-origin' \
    -H 'Sec-Fetch-User: ?1' \
    -H 'Upgrade-Insecure-Requests: 1' \
    -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36 Edg/135.0.0.0' \
    -H 'sec-ch-ua: "Microsoft Edge";v="135", "Not-A.Brand";v="8", "Chromium";v="135"' \
    -H 'sec-ch-ua-mobile: ?0' \
    -H 'sec-ch-ua-platform: "Windows"' \
    --data-raw "gorilla.csrf.Token=FIrLkTQdJgNR3nDuroegJ1sngA%2B3i5B6uct3NDxYldPPvV7ykW5X1oAluuX6R7GxheiouI2riUYothTfie5GTQ%3D%3D&face=$encoded_emoji&content=$encoded_text"
fi
