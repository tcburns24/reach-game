use Rack::Static,
	:urls => ["/templates", "/js", "/styles"],
	:root => "public"

run lambta { |env|
	[
		200,
		{
			'Content-Type' 	=> 'text/html',
			'Cache-Control' => 'public, max-age=86400'
		},
		File.open('public/index.html', File::RDONLY)
	]
}