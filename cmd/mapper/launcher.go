package main

import (
	"sync"

	"github.com/elojah/services"
)

// Namespaces maps configs used for mapper server.
type Namespaces struct {
	Mapper services.Namespace
}

// Launcher represents a mapper server launcher.
type Launcher struct {
	*services.Configs
	ns Namespaces

	h *handler
	m sync.Mutex
}

// NewLauncher returns a new mapper server Launcher.
func (h *handler) NewLauncher(ns Namespaces, nsRead ...services.Namespace) *Launcher {
	return &Launcher{
		Configs: services.NewConfigs(nsRead...),
		h:       h,
		ns:      ns,
	}
}

// Up starts the mapper server service with new configs.
func (l *Launcher) Up(configs services.Configs) error {
	l.m.Lock()
	defer l.m.Unlock()

	sconfig := Config{}
	if err := sconfig.Dial(configs[l.ns.Mapper]); err != nil {
		return err
	}

	return l.h.Dial(sconfig)
}

// Down stops the mapper server service.
func (l *Launcher) Down(configs services.Configs) error {
	l.m.Lock()
	defer l.m.Unlock()

	return l.h.Close()
}
