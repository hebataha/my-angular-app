import { HttpInterceptorFn } from '@angular/common/http';

export const apiInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const token =
    typeof window !== 'undefined'
      ? localStorage.getItem('token')
      : null;

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('Authorization header:', req.headers.get('Authorization'));
  }

  return next(req);
};