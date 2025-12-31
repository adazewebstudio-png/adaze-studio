$lines = Get-Content .env.local
$url = $lines[0]
$key = $lines[1]

Write-Host "URL_START"
Write-Host $url
Write-Host "URL_END"

Write-Host "KEY_START"
for ($i = 0; $i -lt $key.Length; $i += 64) {
    if ($i + 64 -lt $key.Length) {
        Write-Host $key.Substring($i, 64)
    } else {
        Write-Host $key.Substring($i)
    }
}
Write-Host "KEY_END"
