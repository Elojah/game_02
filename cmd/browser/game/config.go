package game

// Config for game object.
type Config struct {
}

// Dial set the config from a config namespace.
func (c *Config) Dial(fileconf interface{}) error {
	// fconf, ok := fileconf.(map[string]interface{})
	// if !ok {
	// 	return errors.ErrEmptyNamespace{}
	// }
	// cURL, ok := fconf["url"]
	// if !ok {
	// 	return errors.ErrMissingKey{Key: "url"}
	// }
	// if c.URL, ok = cURL.(string); !ok {
	// 	return errors.ErrInvalidType{
	// 		Key:    "url",
	// 		Expect: "string",
	// 		Value:  cURL,
	// 	}
	// }
	return nil
}
