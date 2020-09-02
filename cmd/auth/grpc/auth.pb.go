// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: auth.proto

package grpc

import (
	context "context"
	fmt "fmt"
	dto "github.com/elojah/game_02/pkg/account/dto"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	types "github.com/gogo/protobuf/types"
	golang_proto "github.com/golang/protobuf/proto"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = golang_proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

func init() { proto.RegisterFile("auth.proto", fileDescriptor_8bbd6f3875b0e874) }
func init() { golang_proto.RegisterFile("auth.proto", fileDescriptor_8bbd6f3875b0e874) }

var fileDescriptor_8bbd6f3875b0e874 = []byte{
	// 242 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x4c, 0x8c, 0x31, 0x4e, 0xc3, 0x30,
	0x18, 0x85, 0xfd, 0x4b, 0x15, 0x12, 0x19, 0x18, 0x32, 0x30, 0x04, 0xe9, 0xdd, 0x00, 0x1b, 0xb5,
	0x03, 0x03, 0x13, 0x08, 0x4e, 0xc0, 0x01, 0x50, 0xec, 0x1a, 0xa7, 0xd0, 0xf0, 0x47, 0xc1, 0x1e,
	0xd8, 0x38, 0x02, 0xc7, 0xe0, 0x08, 0x8c, 0x1d, 0x19, 0x33, 0x76, 0x24, 0xce, 0xc2, 0xd8, 0x91,
	0x11, 0xe1, 0x50, 0xe8, 0xf6, 0x3e, 0xbd, 0xf7, 0xbe, 0x2c, 0x2b, 0x83, 0xaf, 0x64, 0xd3, 0xb2,
	0xe7, 0x7c, 0xe2, 0xda, 0xc6, 0x14, 0xc7, 0x6e, 0xe1, 0xab, 0xa0, 0xa5, 0xe1, 0x5a, 0x39, 0x76,
	0xac, 0x52, 0xa9, 0xc3, 0x6d, 0xa2, 0x04, 0x29, 0x8d, 0xa7, 0xe2, 0x74, 0x67, 0x6e, 0x97, 0x7c,
	0x57, 0x56, 0xca, 0x95, 0xb5, 0xbd, 0x39, 0x99, 0xaa, 0xe6, 0xde, 0xa9, 0xd2, 0x18, 0x0e, 0x0f,
	0x5e, 0xcd, 0x3d, 0x6f, 0xf3, 0xef, 0xf1, 0xc8, 0x31, 0xbb, 0xa5, 0xfd, 0xd7, 0xdb, 0xba, 0xf1,
	0x4f, 0x63, 0x39, 0x3d, 0xcb, 0x26, 0xe7, 0xc1, 0x57, 0xf9, 0x2c, 0xdb, 0xbf, 0x0e, 0xfa, 0xd1,
	0xb4, 0x0b, 0x6d, 0xf3, 0x03, 0x39, 0xf7, 0x2c, 0xff, 0xb8, 0x38, 0x94, 0xa3, 0x42, 0x6e, 0x15,
	0xf2, 0xea, 0x47, 0x71, 0x71, 0xd9, 0xf5, 0x10, 0xeb, 0x1e, 0x62, 0xd3, 0x83, 0xbe, 0x7a, 0xd0,
	0x73, 0x04, 0xbd, 0x46, 0xd0, 0x5b, 0x04, 0xad, 0x22, 0xe8, 0x3d, 0x82, 0xba, 0x08, 0xfa, 0x88,
	0xa0, 0xcf, 0x08, 0xb1, 0x89, 0xa0, 0x97, 0x01, 0x62, 0x35, 0x80, 0xba, 0x01, 0x62, 0x3d, 0x40,
	0xe8, 0xbd, 0x64, 0x9d, 0x7d, 0x07, 0x00, 0x00, 0xff, 0xff, 0x56, 0xe5, 0x1b, 0x9c, 0x22, 0x01,
	0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// AuthClient is the client API for Auth service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type AuthClient interface {
	Subscribe(ctx context.Context, in *dto.Subscribe, opts ...grpc.CallOption) (*types.Empty, error)
}

type authClient struct {
	cc *grpc.ClientConn
}

func NewAuthClient(cc *grpc.ClientConn) AuthClient {
	return &authClient{cc}
}

func (c *authClient) Subscribe(ctx context.Context, in *dto.Subscribe, opts ...grpc.CallOption) (*types.Empty, error) {
	out := new(types.Empty)
	err := c.cc.Invoke(ctx, "/grpc.Auth/Subscribe", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AuthServer is the server API for Auth service.
type AuthServer interface {
	Subscribe(context.Context, *dto.Subscribe) (*types.Empty, error)
}

// UnimplementedAuthServer can be embedded to have forward compatible implementations.
type UnimplementedAuthServer struct {
}

func (*UnimplementedAuthServer) Subscribe(ctx context.Context, req *dto.Subscribe) (*types.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Subscribe not implemented")
}

func RegisterAuthServer(s *grpc.Server, srv AuthServer) {
	s.RegisterService(&_Auth_serviceDesc, srv)
}

func _Auth_Subscribe_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(dto.Subscribe)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServer).Subscribe(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/grpc.Auth/Subscribe",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServer).Subscribe(ctx, req.(*dto.Subscribe))
	}
	return interceptor(ctx, in, info, handler)
}

var _Auth_serviceDesc = grpc.ServiceDesc{
	ServiceName: "grpc.Auth",
	HandlerType: (*AuthServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Subscribe",
			Handler:    _Auth_Subscribe_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "auth.proto",
}
