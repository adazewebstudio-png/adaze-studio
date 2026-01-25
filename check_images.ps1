Add-Type -AssemblyName System.Drawing
$files = @(
    "c:\Users\richa\Videos\Adaze Studio\public\richard_adaze_logo.png",
    "c:\Users\richa\Videos\Adaze Studio\public\vrared_logo.png",
    "c:\Users\richa\Videos\Adaze Studio\public\og-image.jpg",
    "c:\Users\richa\Videos\Adaze Studio\public\ayeccu_logo.jpg"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        $img = [System.Drawing.Image]::FromFile($file)
        Write-Host "File: $file"
        Write-Host "Dimensions: $($img.Width)x$($img.Height)"
        $img.Dispose()
    }
    else {
        Write-Host "File not found: $file"
    }
}
