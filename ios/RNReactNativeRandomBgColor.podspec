
Pod::Spec.new do |s|
  s.name         = "RNReactNativeRandomBgColor"
  s.version      = "1.0.0"
  s.summary      = "RNReactNativeRandomBgColor"
  s.description  = <<-DESC
                  RNReactNativeRandomBgColor
                   DESC
  s.homepage     = "https://www.linkedin.com/in/kirill-ter-36850039/"
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "kirill.ter@gmail.com" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/author/RNReactNativeRandomBgColor.git", :tag => "master" }
  s.source_files  = "RNReactNativeRandomBgColor/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

