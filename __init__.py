from utils import create_data_generators
from utils import create_model
from utils import create_transfer_learning_model
from utils import compile_and_fit_model
from utils import save_model

train_generator,test_generator = create_data_generators()

m1 = create_model()

compile_and_fit_model(m1,train_generator,test_generator,steps_per_epoch=50,validation_steps=50,epochs=100)

save_model(m1)
