use Rack::Static,
	:urls => ["/templates", "/js", "/styles"],
	:root => "public"

run lambda { |env|
	[
		200,
		{
			'Content-Type' 	=> 'text/html',
			'Cache-Control' => 'public, max-age=86400',
			'Access-Control-Allow-Origin' => '*'
		},
		File.open('public/index.html', File::RDONLY)
	]
}