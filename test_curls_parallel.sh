baseUrl="https://storage.googleapis.com/aistudio-chatapp-data-public/user_2004278453489807567/applet_e99b6902-656b-4102-be65-2c3be5d5dfe3"
check_url() {
  local i=$1
  local ext=$2
  local status=$(curl -s -o /dev/null -w "%{http_code}" "$baseUrl/image_$i.$ext")
  if [ "$status" -eq 200 ]; then
    echo "Found image_$i.$ext"
  fi
}
export -f check_url
export baseUrl
for i in {1..35}; do
  for ext in jpg png; do
    check_url $i $ext &
  done
done
wait
