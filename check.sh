#!/bin/bash
baseUrl="https://storage.googleapis.com/aistudio-chatapp-data-public/user_2004278453489807567/applet_e99b6902-656b-4102-be65-2c3be5d5dfe3"
check_url() {
  url=$1
  if curl -s -I "$url" | grep -q "200 OK"; then
    echo "$url" >> valid_urls.txt
  fi
}
export -f check_url
export baseUrl
rm -f valid_urls.txt
urls=()
for i in {1..40}; do
  urls+=("$baseUrl/image_$i.jpg")
  urls+=("$baseUrl/image_$i.png")
  urls+=("$baseUrl/image_$i.webp")
done
printf "%s\n" "${urls[@]}" | xargs -n 1 -P 20 -I {} bash -c 'check_url "{}"'
cat valid_urls.txt
