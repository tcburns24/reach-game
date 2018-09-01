use Rack::Static,
	:urls => ["/templates", "/js", "/styles"],
	:root => "public"

run lambda { |env|
	[
		200,
		{
			'Content-Type' 	=> 'text/html',
			'Cache-Control' => 'public, max-age=86400',
			'Access-Control-Allow-Origin' => 'http://app.linkedin-reach.io/words?difficulty=1&minLength=4&maxLength=5&start=5&count=40'
		},
		File.open('public/index.html', File::RDONLY)
	]
}