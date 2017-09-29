from distutils.core import setup
from Cython.Build import cythonize

setup(
    ext_modules = cythonize("helloworld.pyx")
)

#Instructions To compile
#python helloworld.py build_ext --inplace